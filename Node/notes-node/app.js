console.log('starting app.js');

const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  description: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  description: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new Note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('remove', 'remove one notes', {
    title: titleOptions
  })
  .command('read', 'Read one note', {
    title: titleOptions
  })
  .help()
  .argv;
const { title, body } = argv;
const [command] = argv._;

console.log('>>yarg', argv);

const logNote = note => {
  if (note) {
    console.log('===');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log(`Note is in use`);
  }
};

switch (command) {
  case 'add': {
    const note = notes.addNote(title, body);
    logNote(note);

    break;
  }
  case 'list': {
    const allNotes = notes.getAll();
    console.log(`>> All ${allNotes.length} Notes: `);
    allNotes.forEach(note => {
      logNote(note);
    });
    break;
  }
  case 'read': {
    const note = notes.getNote(title);
    console.log('Note Found');
    logNote(note);
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
