console.log('starting notes.js');

const addNote = (title, body) => {
  console.log('>>add note: ', title, body);
}

const getAll = () => {
  console.log('>>getting all notes');
}

module.exports = { addNote, getAll }
