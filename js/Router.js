(function () {

  define(['backbone', 'index', 'BooksView'], function (Backbone, IndexView, BooksView) {

    return Backbone.Router.extend({

      routes: {
        '':       'index', // #
        'books':  'books'  // #books
      },

      initialize: function() {},

      index: function () {
        var indexView = new IndexView();
      },

      books: function () {
        var booksView = new BooksView();
      }

    });

  });

}).call(this);