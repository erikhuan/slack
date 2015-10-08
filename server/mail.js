/**
 * Created by Yuantien Huang on 10/8/2015.
 */
Meteor.startup(function () {
    smtp = {
        username: 'huangerik@hotmail.com',
        password: 'w7RIsRcklMKJQu4_5KRpOA',
        server:   'smtp.mandrillapp.com',
        port: 587
    };

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});