(function () {

  require.config({
    shim: {
      jquery: {
        exports: '$'
      },
      lodash: {
        exports: '_'
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    },
    paths: {
      bootstrap: 'lib/bootstrap.min',
      lodash:    'lib/lodash',
      backbone:  'lib/backbone',
      jquery:    'lib/jquery.min'
    },
    baseUrl: './js/'
  });

  require(['Router'], function (Router) {
    // Create router
    var router = new Router();
    // Launch application
    // You don't need this if you're not using router
    Backbone.history.start();
  });

}).call(this);