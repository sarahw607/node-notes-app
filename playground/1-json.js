// Node file system module for writing to files
const fs = require("fs");

// const book = {
//   title: "Jane Eyre",
//   author: "Charlotte Bronte",
// };
// // turn object into JSON
// const jsonBook = JSON.stringify(book);
// // create a file containing this JSON object
// fs.writeFileSync("1-json.json", jsonBook);

// // read buffer from file
// const dataBuffer = fs.readFileSync("1-json.json");
// // convert buffer to actual string
// const dataJSON = dataBuffer.toString();

// //turn JSON into JS object
// const jsBook = JSON.parse(dataJSON);

// console.log(jsBook.title);

// TEST EXERCISE
// load and parse the JSON from the file
const dataBuffer = fs.readFileSync("1-json.json");
// convert to JSON string
const jsonObject = dataBuffer.toString();
// then convert to JS object
const jsObject = JSON.parse(jsonObject);
// change the object properties
jsObject.name = "Sarah";
jsObject.age = "34";

// change js object back to JSON
console.log(JSON.stringify(jsObject));

// write new values to the file
fs.writeFileSync("1-json.json", JSON.stringify(jsObject));
