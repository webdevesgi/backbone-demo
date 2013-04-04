(function () {

require(['jquery', 'backbone'], function ($, Backbone) {

  var IndexView = Backbone.View.extend({

    el: '#main',

    initialize: function () {
      console.log('Initialize IndexView');
    }

  });

  var indexView = new IndexView();

});

}).call(this);