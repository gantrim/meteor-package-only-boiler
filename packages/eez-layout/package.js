Package.describe({
    name: 'eez:layout',
    summary: 'The main html and styling of the site'
});

Package.onUse(function (api) {

    api.versionsFrom('1.1.0.2');

    var both = ['client', 'server'];

    api.use([
        'templating',
        'spacebars',
    ], 'client');

    // Our layout will use bootstrap, along with our custom theme code defined in eez:bootstrap
    //api.use('eez:bootstrap', 'client');

    // We configure the router to use this package's layout view as the layout
    api.use('iron:router@1.0.9', both);
    api.addFiles('lib/routes.js', both);

    //Add your views here!
    var views = [
        'layout',
        'navigation'
    ];
    views.forEach(function (view) {
        api.addFiles('client/layout/' + view + '.html', 'client');
    });
});
