const PublicMessageModel = require('../messagemodel/publicmessagemodel.js');

class PublicMessageService {
    static async AddPublicMessage(apartmentID, message) {
        try {
            const createpublicmessage = new PublicMessageModel({ apartmentID, message });
            return await createpublicmessage.save();
        } catch (error) {
            throw error;
        }
    }

    static async GetPublicMessages(apartmentID) {
        try {
            return await PublicMessageModel.find({apartmentID});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PublicMessageService;
