(function () {

define(['jquery', 'backbone', 'BookList'], function ($, Backbone, BookList) {

  var BookListView = Backbone.View.extend({

    el: '#book_list',
    template: _.template($('#template_book').text()),

    initialize: function () {
      var self = this;
      console.log('Initialize view BookListView');
      this.collection = new BookList();
      this.collection.on('reset', function (books) {
        self.render();
      });
    },

    render: function () {
      var self = this;
      var objects = this.collection.toJSON();
      var result = [];
      _.each(objects, function (book, key, all) {
        result.push(self.template(book));
      });
      self.$el.html(result.join(''));
    }

  });

  return BookListView;

});

}).call(this);