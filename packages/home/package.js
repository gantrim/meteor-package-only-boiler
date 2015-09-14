Package.describe({
  name: 'eez:home',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Loads the home page',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var both = ['client', 'server'];

  api.use('kadira:flow-router@2.6.0', both);
  api.use('meteorhacks:flow-layout@1.4.2', both);
  api.use('arillo:flow-router-helpers@0.4.5', both);
  api.use('eez:layout', both);
  api.addFiles('lib/routes.js', both);

  api.addFiles('client/views/home/home.jade', 'client');

});