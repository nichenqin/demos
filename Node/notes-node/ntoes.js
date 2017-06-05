console.log('starting notes.js');

const addNote = (title, body) => {
  console.log('>>add note: ', title, body);
}

const getAll = () => {
  console.log('>>getting all notes');
}

const getNote = title => {
  console.log('>>Getting note: ', title);
}

const removeNote = title => {
  console.log('>>Removing note', title);
}

module.exports = { addNote, getAll, getNote, removeNote };
