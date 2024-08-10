const mongoose = require('mongoose');
const connection = require('../../config');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const userSchema = new Schema({
    apartmentID:{
        type: String,
        required: false
    },
    siteID:{
        type: String,
        required: false
    },
    id: {
        type: String,
        default: function() {
            return uuidv4();
        },
        unique: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    homeNo: {
        type: String,
        required: true
    },
    doorNo: {
        type: String,
        required: true
    },
    telNo:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(){
    try {
        var user = this;
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(user.password, salt);
        user.password = hashpass;
    } catch (error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};
//we created a new database with a usermodel, we can do query in this databese
const UserModel = mongoose.model('UsersDatabase', userSchema);
//we exported the usermodel
module.exports = UserModel;
