const mongoose = require('mongoose');
const MONGODB_URI = require('../config'); 

const connection = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database, The URI is: ' + MONGODB_URI);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
};

module.exports = connection;
