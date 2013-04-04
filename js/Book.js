(function () {

define(['backbone'], function (Backbone) {

  return Backbone.Model.extend({

    initialize: function () {
      console.log('Initialize model Book: "' + this.get('title') + '"');
    }

  });

});

}).call(this);