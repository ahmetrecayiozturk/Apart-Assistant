const publicMessageService = require('../messageservices/publicmessageservice.js');
const ApartmentService = require('../../AuthService/model/apartmentidmodel.js');

exports.addPublicMessage = async function(req, res, next) {
    try {
        const { apartmentID, message } = req.body;
        const isapartmentidexist = await ApartmentService.findOne({ apartmentID });

        if (isapartmentidexist) {
            await publicMessageService.AddPublicMessage(apartmentID, message); // Argümanları doğru iletin
            res.status(200).json({ message: 'Public message added' });
        } else {
            res.status(404).json({ message: 'ApartmentId does not exist' });
        }
    } catch (error) {
        next(error);
    }
};

exports.getPublicMessages = async function(req, res, next) {
    try {
        const { apartmentID } = req.body;
        const messages = await publicMessageService.GetPublicMessages(apartmentID); // Fonksiyonu doğru çağırın
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

/*-----------------------------------------HATALARIMIZI GÖRELİM Kİ BİR DAHA YAPMAYALIM----------------------------------------------
const publicMessageService = require('../messageservices/publicmessageservice.js');
//const apartmentid = require('./AuthService/model/apartmentidmodel.js')
//const ApartmentService = require('../model/apartmentidmodel.js');
const ApartmentService = require('../../AuthService/model/apartmentidmodel.js');
exports.addPublicMessage = async function(req, res, next) {
    try {
        const { apartmentID, message } = req.body;
        const isapartmentidexist = await ApartmentService.findOne({apartmentID:apartmentID})
        if(isapartmentidexist){
            await publicMessageService.AddPublicMessage({apartmentID : apartmentID,message: message}); // Doğru servisi ve fonksiyonu çağırın
            res.status(200).json({ message: 'Public message added' });
        }
        else{
            res.status(200).json({ message: 'ApartmentId does not exist' });
        }

    } catch (error) {
        next(error);
    }

};
exports.getPublicMessages = async function(req, res, next) {
    try {
        const {apartmentID} = req.body;
        const messages = await publicMessageService.GetPublicMessage({apartmentID: apartmentID});
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        // veya isteğe bağlı olarak:
        // next(error);
    }
};
*/

