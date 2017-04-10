(function ($) {
    World = Backbone.Model.extend({
        name: null
    });

    Worlds = Backbone.Collection.extend({
        initialize: function (models, options) {
            this.bind('add', options.view.addOneWorld);
        }
    });
}(jQuery));