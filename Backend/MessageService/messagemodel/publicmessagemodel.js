const mongoose = require('mongoose');

const { Schema } = mongoose;

const publicMessageSchema = new Schema({
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
        default: Date.now
    }
});

const publicMessageModel = mongoose.model('PublicMessages', publicMessageSchema);

module.exports = publicMessageModel;
