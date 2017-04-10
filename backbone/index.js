// Backbone Model

var Blog = Backbone.Model.extend({
    defaults: {
        author: '',
        title: '',
        url: '',
    }
});

// Backbone Collection

var Blogs = Backbone.Collection.extend({

});

// instantiate two blogs

var blog1 = new Blog({
    author: 'Micheal',
    title: 'Micheal\'s Blog',
    url: 'michealsblog.com'
});

var blog2 = new Blog({
    author: 'John',
    title: 'John\'s Blog',
    url: 'johnsblog.com'
});

// instantiate Collection

var blogs = new Blogs([blog1, blog2]);