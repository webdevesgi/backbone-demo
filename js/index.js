(function () {

define(['jquery', 'backbone', 'BookListView'], function ($, Backbone, BookListView) {

  return Backbone.View.extend({

    el: '#main',

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html('<h2>Index</h2><p>Go to <a href="#books">the list of books</a></p>');
    }

  });

});

}).call(this);