const t = process.argv[2]; 

if (t) {
  console.log(`Hello, ${t}!`);
} else {
  console.log("Please provide a name.");
}
