(function () {

require(['jquery', 'backbone', 'BookListView'], function ($, Backbone, BookListView) {

  var IndexView = Backbone.View.extend({

    el: '#main',

    initialize: function () {
      var self = this;
      console.log('Initialize view IndexView');
      this.render();
      this.bookListView = new BookListView();
      this.bookListView.collection.fetch();
    },

    render: function () {
      this.$el.html('<h2>List of books</h2><ul id="book_list"></ul>');
    }

  });

  var indexView = new IndexView();

});

}).call(this);