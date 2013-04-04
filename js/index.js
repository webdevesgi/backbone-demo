(function () {

require(['jquery', 'backbone', 'BookListView'], function ($, Backbone, BookListView) {

  var IndexView = Backbone.View.extend({

    el: '#main',
    apiUrl: '/api/',

    initialize: function () {
      console.log('Initialize view IndexView');
      this.bookListView = new BookListView();

      this.makeRequest('books', {});
    },

    makeRequest: function (obj, params) {
      var self = this;
      $.ajax({
        url: this.apiUrl + obj + '.json',
        method: 'GET',
        data: params,
        success: function (data) {
          self.bookListView.collection.add(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(textStatus);
          console.error(errorThrown);
        }
      });
    }

  });

  var indexView = new IndexView();

});

}).call(this);