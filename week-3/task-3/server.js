const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 7000;
const filepath = path.join(__dirname, "data.json");

function read() {
    return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

function write(data) {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

function sendResponse(res, statusCode, data) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
    const urlParts = req.url.split("/");
    const id = parseInt(urlParts[2], 10);

    switch (req.method) {
        case "GET":
            if (urlParts[1] === "books") {
                if (id) {
                    const books = read();
                    const book = books.find(b => b.id === id);
                    if (book) {
                        sendResponse(res, 200, book);
                    } else {
                        sendResponse(res, 404, { message: "Book not found" });
                    }
                } else {
                    const books = read();
                    sendResponse(res, 200, books);
                }
            }
            break;

        case "POST":
            if (urlParts[1] === "books") {
                let body = "";
                req.on("data", chunk => {
                    body += chunk.toString();
                });
                req.on("end", () => {
                    const bodyData = JSON.parse(body);
                    const books = read();
                    const newBook = {
                        id: books.length + 1,
                        title: bodyData.title,
                        author: bodyData.author
                    };
                    books.push(newBook);
                    write(books);
                    sendResponse(res, 201, newBook);
                });
            }
            break;

        case "PUT":
            if (urlParts[1] === "books" && id) {
                let body = "";
                req.on("data", chunk => {
                    body += chunk.toString();
                });
                req.on("end", () => {
                    const bodyData = JSON.parse(body);
                    const books = read();
                    const index = books.findIndex(b => b.id === id);
                    if (index !== -1) {
                        books[index] = { id, ...bodyData };
                        write(books);
                        sendResponse(res, 200, books[index]);
                    } else {
                        sendResponse(res, 404, { message: "Book not found" });
                    }
                });
            }
            break;

        case "DELETE":
            if (urlParts[1] === "books" && id) {
                const books = read();
                const index = books.findIndex(b => b.id === id);
                if (index !== -1) {
                    books.splice(index, 1);
                    write(books);
                    sendResponse(res, 204, null);
                } else {
                    sendResponse(res, 404, { message: "Book not found" });
                }
            }
            break;

        default:
            sendResponse(res, 405, { message: "Method not allowed" });
            break;
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});