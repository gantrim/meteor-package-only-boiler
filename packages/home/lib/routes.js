FlowRouter.route('/', {
    //subscriptions: function (params, queryParams) {
    //    this.register('posts', Meteor.subscribe('allPosts'));
    //},
    action: function (params, queryParams) {
        console.log("got to this route");
        FlowLayout.render('eezLayout', {main: 'eezHome'});
    },
    name: 'home'
});