console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./ntoes');

const argv = yargs.argv;
const { title, body } = argv;

console.log('>>yarg', argv);

switch (command) {
  case 'add':
    notes.addNote(title, body);
    break;
  case 'list':
    console.log('list');
    notes.getAll();
    break;
  case 'read':
    console.log('read');
    break;

  default:
    console.log('not recognized');
    break;
}
