const NotificationModel = require('../notificationmodel/notificationmodel.js');

class NotificationService {
    static async addNotification(siteID, apartmentID, message) {
        try {
            const createNotification = new NotificationModel({ siteID: siteID, apartmentID: apartmentID, message: message });
            return await createNotification.save();
        } catch (error) {
            throw error;
        }
    }

    static async getNotifications(notificationID) {
        try {
            return await NotificationModel.find({ notificationID });
        } catch (error) {
            throw error;
        }
    }

    static async markNotificationAsRead(notificationID) {
        try {
            return await NotificationModel.findOneAndUpdate(
                { notificationID }, // Burada filtre nesnesi kullanıyoruz
                { isRead: true },
                { new: true }
            );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NotificationService;
//----------------------------------------------------------------------------------------------------------------------------------
//-----------------------buraya bakkk--------------------------------
/*const NotificationModel = require('../notificationmodel/notificationmodel.js');

class NotificationService {
    static async addNotification(userID, apartmentID, message) {
        try {
            const createNotification = new NotificationModel({ userID, apartmentID, message });
            return await createNotification.save();
        } catch (error) {
            throw error;
        }
    }

    static async getNotifications(apartmentID) {
        try {
            return await NotificationModel.find({ userID });
        } catch (error) {
            throw error;
        }
    }

    static async markNotificationAsRead(notificationID) {
        try {
            return await NotificationModel.findByIdAndUpdate(notificationID, { read: true }, { new: true });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NotificationService;*/

/*const NotificationModel = require('../notificationmodel/notificationmodel.js');

class NotificationService {
    static async addNotification(apartmentID, message, type) {
        try {
            const createNotification = new NotificationModel({ apartmentID, message, type });
            return await createNotification.save();
        } catch (error) {
            throw error;
        }
    }

    static async getNotifications(apartmentID) {
        try {
            return await NotificationModel.find({ apartmentID });
        } catch (error) {
            throw error;
        }
    }

    static async markNotificationAsRead(notificationID) {
        try {
            const notification = await NotificationModel.findById(notificationID);
            if (!notification) {
                return null;
            }
            notification.isRead = true;
            await notification.save();
            return notification;
        } catch (error) {
            throw error;
        }
    }
}
*/

module.exports = NotificationService;
/*const notificationModel = require('../notificationmodel/notificationmodel.js');

class NotificationService {

    static async addNotification(apartmentID, message, type){
        try {
            const notification = new notificationModel(apartmentID, message, type);
            return await notification.save();
            
        } catch (error) {
            throw error;
        }
    }

    static async getNotifications(apartmentID){
        try {
            return await notificationModel.find({apartmentID});
        } catch (error) {
            throw error;
        }
    }
    static async markAsRead(notificationID){
        try {
        return await notificationModel.findByIdAndUpdate(notificationID, {isRead: true});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NotificationService;
*/