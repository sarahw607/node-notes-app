const fs = require("fs");
const chalk = require("chalk");

const addNote = function (title, body) {
  const notes = loadNotes();
  const existingNote = notes.filter((n) => n.title === title);
  if (existingNote.length) {
    console.log("A note with this title already exists");
    return;
  }
  notes.push({ title, body });
  saveNotes(notes);
  console.log("Note added");
};

const saveNotes = function (notes) {
  const jSONNotes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jSONNotes);
};

const removeNote = function (title) {
  const existingNotes = loadNotes();
  const filteredNotes = existingNotes.filter((n) => n.title !== title);
  if (existingNotes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.bgGreen("Note deleted"));
    return;
  }
  console.log(chalk.bgRed("No note found"));
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jSONNotes = dataBuffer.toString();
    const jsNotes = JSON.parse(jSONNotes);
    return jsNotes;
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote };
