(function () {

define(['backbone'], function (Backbone) {

  var Book = Backbone.Model.extend({

    initialize: function () {
      console.log('Initialize model Book');
    }

  });

  return Book;

});

}).call(this);