/**
 * Created by Yuantien Huang on 10/8/2015.
 */
Meteor.methods({
    newMessage: function (message) {
        message.timestamp = Date.now();
        message.user = Meteor.userId();
        Messages.insert(message);
    }
});