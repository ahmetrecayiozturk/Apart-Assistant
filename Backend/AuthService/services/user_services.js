const UserModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(siteID, apartmentID, name, homeNo, doorNo, telNo, password) {
        try {
            const createUser = new UserModel({ siteID: siteID, apartmentID: apartmentID, homeNo: homeNo, doorNo: doorNo, name: name, password: password, telNo: telNo });
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async checkUser(name) {
        try {
            return await UserModel.findOne({ name });
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire) {
        return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
    }
}
//we exportes userservice
module.exports = UserService;
