Package.describe({
  summary: 'Integrate with Raven JS for JavaScript errors and logs',
  version: '0.3.0',
  name: 'deepwell:raven',
  git: 'https://github.com/deepwell/meteor-raven.git'
});

Npm.depends({
  'raven': '0.10.0'
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@1.2.1');
  api.addFiles('lib/main.js', [ 'client', 'server' ]);
  api.addFiles('vendor/raven.js', 'client');

  api.export([
    'RavenLogger'
  ], [
    'client',
    'server'
  ]);
});
