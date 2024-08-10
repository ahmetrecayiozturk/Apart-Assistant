const mongoose = require('mongoose');

const {Schema} = mongoose;

const apartmentIdSchema = new Schema({
    apartmentID:{
        type:  String,
        lowercase: true,
        //unique: true
    }
});


const apartmentIdModel = mongoose.model('ApartmentId', apartmentIdSchema);
module.exports = apartmentIdModel;