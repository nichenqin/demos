// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs();

songs.add(new Song({
    title: 'Song 1',
    genre: 'jazz',
    downloads: 110
}), {
    at: 0
});

songs.push(new Song({
    title: 'Song 2',
    genre: 'jazz',
    downloads: 90
}));

var jazzSongs = songs.where({
    genre: 'jazz'
});

var findJazzSongs = songs.findWhere({
    genre: 'jazz'
});

var filteredSongs = songs.where({
    title: 'Song 2',
    genre: 'jazz'
});

console.log('Filtered Songs', filteredSongs);

var topDownloads = songs.filter(function (song) {
    return song.get('downloads') > 100;
});

console.log('Top Downloads', topDownloads);

songs.each(function (song) {
    console.log(song);
});
