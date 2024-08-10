const mongoose = require('mongoose');

const {Schema} = mongoose;

const BreakdownNotificationSchema = new Schema({
    siteID:{
        type: String,
        required: true
    },
    apartmentID: {
        type: String,
        required: true
    },
    notification: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const BreakdownNotificationModel = mongoose.model('Breakdowns', BreakdownNotificationSchema);

module.exports = BreakdownNotificationModel;