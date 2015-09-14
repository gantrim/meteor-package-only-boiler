Package.describe({
    name: 'eez:layout',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    var both = ['client', 'server'];

    api.use([
        'templating',
        'mquandalle:jade@0.4.3_1',
        'spacebars',
        'stylus'
    ], 'client');


    //Add your views here!
    var views = [
        'header',
        'layout'
    ];
    views.forEach(function (view) {
        api.addFiles('client/views/' + view + "/" + view + '.jade', 'client');
    });

});

//
//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('eez:layout');
//});

