const mongoose = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const notificationSchema = new Schema({
    notificationID: {
        type: String,
        default: function() {
            return uuidv4();
        },
        unique: true
    },
    apartmentID: {
        type: String,
        required: true,
    },
    siteID: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: ['message', 'alert', 'reminder'],
        default: 'message',
    }
});

const NotificationModel = mongoose.model('Notification', notificationSchema);

module.exports = NotificationModel;

//----------------------------------------------------------------------------------------------------------------------------------
//-----------------bbakkkk sonra------------
/*const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    notificationID: {
        type: String,
        default: function() {
            return uuidv4();
        },
        unique: true
    },
    apartmentID: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: ['message', 'alert', 'reminder'],
        default: 'message',
    }
});

const NotificationModel = mongoose.model('Notification', notificationSchema);

module.exports = NotificationModel;
*/