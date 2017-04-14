var ArtistsView = Backbone.View.extend({
    render: function () {
        this.$el.html('Artists Router')

        return this;
    }
})

var AlbumsView = Backbone.View.extend({
    render: function () {
        this.$el.html('Albums Router')

        return this;
    }
})

var GenresView = Backbone.View.extend({
    render: function () {
        this.$el.html('Genres Router')

        return this;
    }
})

var AppRouter = Backbone.Router.extend({
    routes: {
        'albums': 'viewAlbums',
        'album/:albumId': 'viewAlbumById',
        'artists': 'viewArtists',
        'genres': 'viewGenres',
        '*other': 'defaultRouder'
    },

    defaultRouter: function () {

    },

    viewGenres: function () {
        var view = new GenresView({ el: '#container' });
        view.render();
    },

    viewArtists: function () {
        var view = new ArtistsView({ el: '#container' });
        view.render();
    },

    viewAlbumById: function (albumId) {

    },

    viewAlbums: function () {
        var view = new AlbumsView({ el: '#container' });
        view.render();
    }
})

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
    events: {
        'click': 'onClick'
    },

    onClick: function (e) {
        var $li = $(e.target);
        router.navigate($li.attr('data-url'), { trigger: true })
    }
})

var navView = new NavView({ el: '#nav' })
