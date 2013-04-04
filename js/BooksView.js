(function () {

define(['jquery', 'backbone', 'BookListView'], function ($, Backbone, BookListView) {

  return Backbone.View.extend({

    el: '#main',

    initialize: function () {
      var self = this;
      console.log('Initialize view BooksView');
      // Render page
      this.render();

      // Create collection and its view, fetch data
      this.bookListView = new BookListView();
      this.bookListView.collection.fetch();
    },

    render: function () {
      this.$el.html('<h2>List of books</h2><ul id="book_list"></ul><p><a href="#">Back to index</a></p>');
    }

  });

});

}).call(this);