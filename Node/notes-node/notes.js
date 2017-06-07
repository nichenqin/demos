console.log('starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    const notes = JSON.parse(notesString);
    return notes;
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = { title, body };

  const duplicateNotes = notes.filter(note => note.title === title);
  if (!duplicateNotes.length) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

const getAll = () => {
  console.log('>>getting all notes');
};

const getNote = title => {
  const notes = fetchNotes();
  const selected = notes.find(note => note.title === title);
  return selected;
};

const removeNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

module.exports = { addNote, getAll, getNote, removeNote };
