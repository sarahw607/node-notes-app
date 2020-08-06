const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
  console.log(chalk.magenta.inverse("Your notes"));
  loadNotes().forEach((note) => {
    console.log(note.title);
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const existingNote = notes.filter((n) => n.title === title);
  const existingNote = notes.find((n) => n.title === title);
  if (existingNote) {
    console.log("A note with this title already exists");
    return;
  }
  notes.push({ title, body });
  saveNotes(notes);
  console.log("Note added");
};

const saveNotes = (notes) =>
  fs.writeFileSync("notes.json", JSON.stringify(notes));

const removeNote = (title) => {
  const existingNotes = loadNotes();
  const filteredNotes = existingNotes.filter((n) => n.title !== title);
  if (existingNotes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.bgGreen("Note deleted"));
    return;
  }
  console.log(chalk.bgRed("No note found"));
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((n) => n.title === title);
  if (foundNote) {
    console.log(chalk.magenta.inverse(foundNote.title));
    console.log(foundNote.body);
    return;
  }
  console.log(chalk.bgRed("No note found"));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jSONNotes = dataBuffer.toString();
    const jsNotes = JSON.parse(jSONNotes);
    return jsNotes;
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
