const mongoose = require('mongoose');

const {Schema} = mongoose;

const siteSchema = new Schema({
    siteID:{
        type:  String,
        lowercase: true,
        //unique: true
    }
});

const siteModel = mongoose.model("siteId's",siteSchema);

module.exports = siteModel;