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
        deps: ['lodash'],
        exports: 'Backbone'
      }
    },
    paths: {
      bootstrap: 'lib/bootstrap.min',
      lodash:    'lib/lodash',
      backbone:  'lib/backbone-min',
      jquery:    'lib/jquery.min'
    },
    baseUrl: './js/'
  });

  require(['index']);

}).call(this);