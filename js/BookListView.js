(function () {

define(['jquery', 'backbone', 'BookList'], function ($, Backbone, BookList) {

  var BookListView = Backbone.View.extend({

    el: '#book_list',

    initialize: function () {
      var self = this;
      console.log('Initialize view BookListView');
      this.collection = new BookList();
      this.collection.on("add", function (books) {
        self.render();
      });
    },

    render: function () {
      var self = this;
      var objects = this.collection.toJSON();
      _.each(objects, function (book, key, all) {
        self.$el.append('<p>' + book.title + '</p>');
      });
    }

  });

  return BookListView;

});

}).call(this);