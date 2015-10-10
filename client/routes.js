/**
 * Created by Yuantien Huang on 10/9/2015.
 */
Router.configure({
    layoutTemplate: 'app'
});

Router.route('/:channel', function () {
    Session.set('channel', this.params.channel);
    this.render('messages');
});

Router.route('/', function () {
    this.redirect('/general');
});