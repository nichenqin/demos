console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./ntoes');

const argv = yargs.argv;
const { title, body } = argv;
const [command] = argv._;

console.log('>>yarg', argv);

switch (command) {
  case 'add':
    notes.addNote(title, body);
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    notes.getNote(title)
    break;
  case 'remove':
    notes.removeNote(title)
    break;

  default:
    console.log('not recognized');
    break;
}
