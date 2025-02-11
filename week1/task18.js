console.log("task 18");

//Create an object called book with properties title, author, and pages.
//  Add a method called displayInfo to the object, which logs a message using the properties to display information about the book.
//  Instantiate the object with sample values and call the displayInfo method.


const book = {
    title: "the wizard of the oz",
    author:"chetan Bhagat",
    pages:234,

    DisplayInfo: function() {
        console.log(`my book title is ${this.title} & its author is ${this.author} with  ${this.pages} number of pages.`)
    }};

book.DisplayInfo();