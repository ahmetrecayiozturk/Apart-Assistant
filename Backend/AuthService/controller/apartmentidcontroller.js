const apartmentIdModel = require('../model/apartmentidmodel.js');

exports.addApartmentId = async function(req, res, next) {
    try {
        const { apartmentID } = req.body; // Yazım hatasını düzelttik
        const isexist = await apartmentIdModel.findOne({apartmentID: apartmentID});
        if(!isexist) {
            const newApartmentId = new apartmentIdModel({ apartmentID:apartmentID }); // Yazım hatasını düzelttik
            await newApartmentId.save();
            res.status(200).json({ message: 'ApartmentId added' });
        }
        else{
            res.status(200).json({ message: 'ApartmentId already exist' });
        }
    } catch (error) {
        next(error);
    }
};

//-------------------------------------------------------------------------------------------------------------------------------------------

/*
exports.addApartmentId = async function(req,res,next) {
    try {
        const { apartmentID } = req.body;
        const newApartmentId = new apartmentIdModel({apartmenID: apartmentID})
        await newApartmentId.save();
        res.status(200).json({ message: 'ApartmentId added' });
    } catch (error) {
        next(error);
    }
}*/
