'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
   
  });

  // Import Bootstrap CSS
  app.import('node_modules/jquery/dist/jquery.min.js');
  
  app.import('app/styles/css/bootstrap.min.css');
  app.import('app/styles/lib/animate/animate.min.css');
  app.import('node_modules/owl.carousel/dist/assets/owl.carousel.min.css');
  app.import('node_modules/owl.carousel/dist/assets/owl.theme.default.min.css');
  app.import('node_modules/owl.carousel/dist/owl.carousel.min.js');
  app.import('node_modules/wowjs/dist/wow.min.js');
  // Import Bootstrap JS
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
  app.import('node_modules/jquery.nicescroll/dist/jquery.nicescroll.min.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
