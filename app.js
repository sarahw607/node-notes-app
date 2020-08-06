const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes.js");

yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The main body of the note",
      demandOption: true,
      type: "string",
    },
  },
  // title and body come from argv
  handler: function ({ title, body }) {
    notes.addNote(title, body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of note to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: function ({ title }) {
    notes.removeNote(title);
  },
});

// List all the notes
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("This is a list of notes");
  },
});

// Read a note
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("You are reading a note");
  },
});

yargs.parse();
