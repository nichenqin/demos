console.log('starting app.js');

const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const { title, body } = argv;
const [command] = argv._;

console.log('>>yarg', argv);

switch (command) {
  case 'add': {
    const note = notes.addNote(title, body);
    if (note) {
      console.log('note created');
      console.log('===');
      console.log(`Title: ${title}`);
      console.log(`Body: ${body}`);
    } else {
      console.log(`Note ${title} is in use`);
    }

    break;
  }
  case 'list': {
    const allNotes = notes.getAll();
    console.log(`>> All ${allNotes.length} Notes: `);
    console.log(allNotes);
    break;
  }
  case 'read': {
    const note = notes.getNote(title);
    if (note) {
      console.log('Note found');
      console.log('===');
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);

    } else {
      console.log('Note not Found');
    }
    break;
  }
  case 'remove': {
    const noteRemoved = notes.removeNote(title);
    noteRemoved
      ? console.log('Note Removed')
      : console.log('failed to remove note');
    break;
  }
  default: {
    console.log('not recognized');
    break;
  }
}
