(function () {

define(['backbone', 'Book'], function (Backbone, Book) {

  var BookList = Backbone.Collection.extend({

    model: Book,
    url: '/api/books.json',

    initialize: function () {
      console.log('Initialize collection BookList');
    }

  });

  return BookList;

});

}).call(this);