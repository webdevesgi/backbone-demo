(function () {

define(['backbone', 'Book'], function (Backbone, Book) {

  return Backbone.Collection.extend({

    model: Book, // This is a collection of models Book
    url: '/api/books.json', // URL to fetch

    initialize: function () {
      console.log('Initialize collection BookList');
    }

  });

});

}).call(this);