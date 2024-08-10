const UserService = require('../services/user_services');
const ApartmentService = require('../model/apartmentidmodel.js');
const SiteIDModel = require('../model/siteidmodel.js');
exports.register = async function(req, res, next) {
    try {
        const { siteID,apartmentID,homeNo,doorNo,name,password,telNo } = req.body;

        // apartmentID'yi kontrol ediyoruz
        const isapartmentexist = await ApartmentService.findOne({ apartmentID });
        const issitexist = await SiteIDModel.findOne({ siteID });
        if (isapartmentexist && issitexist) {
            const user = await UserService.registerUser(siteID, apartmentID, name, homeNo, doorNo, telNo, password); // Burada apartmentID'yi doğru şekilde geçirin
            res.status(201).json({
                message: "User created",
                user
            });
        } else {
            res.status(404).json({ message: "Apartment ID or Site ID not found, please check the id's" });
        }
    } catch (error) {
        next(error);
    }
};
exports.login = async function(req, res, next) {
    try {
        const { name, password } = req.body;
        const user = await UserService.checkUser(name);

        if (!user) {
            throw new Error("User not found");
        }

        const isMatch = await user.comparePassword(password);

        if (isMatch === false) {
            throw new Error("Wrong password");
        }

        // apartmentID'yi db'den aldık
        const { siteID, apartmentID } = user;

        let tokenData = { _id: user._id, name: user.name, apartmentID, siteID };
        const token = await UserService.generateToken(tokenData, "secretKey", "1h");

        res.status(200).json({ status: true, token: token });
    } catch (error) {
        next(error);
    }
};


//-------------------------------------------------------------------------------------------------------------------------------------------

/* gpt yazdırdı
exports.register = async function(req, res, next) {
    try {
        const { apartmentID, email, password } = req.body;

        // apartmentID'yi kontrol ediyoruz
        const apartment = await ApartmentService.findOne({ apartmentID });
        if (apartment) {
            const user = await UserService.registerUser({apartmentID: apartmentID, email: email, password: password});
            res.status(201).json({
                message: "User created",
                user
            });
        } else {
            res.status(404).json({ message: "Apartment ID not found" });
        }
    } catch (error) {
        next(error);
    }
};
*/

/*const UserService = require('../services/user_services');
const ApartmentService = require('../model/apartmentidmodel.js'); 

exports.register = async function(req, res, next) {
    try {
        const { apartmentID, email, password } = req.body;
        const apartmentidexits = await ApartmentService.findOne({ apartmentID: apertmentID})
        if(apartmentidexits){
            const user = await UserService.registerUser({apartmentID: apartmentID, email: email, password: password});
            res.status(201).json({
                message: "user created",
                user
            });
        }
        else {
            res.status(400).json({ message: "Apartment ID not found" }); // Apartment ID bulunamazsa hata döndür
        }
    } catch (error) {
        next(error);
    }
};
exports.login = async function(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await UserService.checkUser(email);

        if (!user) {
            throw new Error("User not found");
        }

        const isMatch = await user.comparePassword(password);

        if (isMatch === false) {
            throw new Error("Wrong password");
        }

        let tokenData = { _id: user._id, email: user._email };
        const token = await UserService.generateToken(tokenData, "secretKey", "1h");

        res.status(200).json({ status: true, token: token });
    } catch (error) {
        next(error);
    }
};
*/
//--------------------------------------------------------------------------------------------------------------------------------
/*
exports.loginid = async function(req, res, next){
    try {
        const { apartmentID, email, password } = req.body;
        const apartmentidexits = await ApartmentService.findOne({ apartmentID: apartmentID, email: email, password: password})
        if(apartmentidexits){
            res.status(201).json({
                message: "login",
            });
        }
        else {
            res.status(400).json({ message: "User not found" }); // Apartment ID bulunamazsa hata döndür
        }
    } catch (error) {
        next(error);
    }
}*/
