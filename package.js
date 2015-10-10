Package.describe({
  name: 'hubaaa:endpoint-puller',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Pulls API endpoints, checking for new data and passing it through json pipes.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hubaaa/meteor-endpoint-puller',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'meteor',
    'underscore',
    'coffeescript',
    'http',
    'practicalmeteor:loglevel@1.2.0_2',
    'practicalmeteor:chai@2.1.0_1',
    'hubaaa:easy-meteor-settings@0.1.1',
    'hubaaa:json-pipes@0.1.1'
  ], 'server');

  api.addFiles('EndpointPuller.coffee', 'server');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'coffeescript',
    'practicalmeteor:mocha@2.1.0_3'
  ], 'server');

  api.use('hubaaa:endpoint-puller@0.1.0', 'server');

  api.addFiles('EndpointPullerTest.coffee', 'server');
});
