const obj = {
  name: 'nichenqin'
};

const stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

const personSting = '{"name":"wuwenjae"}'

const person = JSON.parse(personSting);

console.log(typeof person);
console.log(person);

const fs = require('fs');

const originNote = {
  title: 'some title',
  body: 'some body'
}

const originNoteString = JSON.stringify(originNote);

fs.writeFileSync('notes.json', originNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note); // object
console.log(note); // { title: 'some title', body: 'some body' }
