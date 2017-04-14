var song = new Song({ title: 'Blue in Green' });

var songView = new SongView({ el: '#container', model: song });
songView.render();
