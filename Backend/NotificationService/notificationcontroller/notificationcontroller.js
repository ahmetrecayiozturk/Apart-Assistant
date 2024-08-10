const NotificationService = require('../notificationservice/notificationservice.js');
const ApartmentService = require('../../AuthService/model/apartmentidmodel.js');
const NotificationModel = require('../notificationmodel/notificationmodel.js');
const SiteIdModel = require('../../AuthService/model/siteidmodel.js');
exports.addNotification = async function(req, res, next) {
    try {
        const { siteID, apartmentID, message } = req.body;
        const isapartmentidexist = await ApartmentService.findOne({ apartmentID });
        const issiteidexist = await SiteIdModel.findOne({siteID});
        if (isapartmentidexist && issiteidexist) {
            await NotificationService.addNotification(siteID, apartmentID, message);
            res.status(200).json({ message: 'Notification added' });
        } else {
            res.status(404).json({ message: 'ApartmentId or SiteID does not exist' });
        }
    } catch (error) {
        next(error);
    }
};

exports.getNotifications = async function(req, res, next) {
    try {
        const { notificationID } = req.body;
        const notifications = await NotificationService.getNotifications(notificationID);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.markNotificationAsRead = async function(req, res, next) {
    try {
        const { notificationID } = req.body;
        const isNotificationIDexist = await NotificationModel.findOne({notificationID: notificationID});
        console.log(`Received notificationID: ${notificationID}`);  // Log for debugging
        if(isNotificationIDexist){
            console.log(`Notification found: ${isNotificationIDexist}`);  // Log for debugging
            const updatedNotification = await NotificationService.markNotificationAsRead(notificationID);
            res.status(200).json(updatedNotification);
        }
        else{
            res.status(404).json({ message: 'NotificationId does not exist' });
        }

    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};
//----------------------------------------------------------------------------------------------------------------------------------
//---------------------------buraya bakkkkkkkkkk--------------------------------
/*const NotificationService = require('../notificationservice/notificationservice.js');
const ApartmentService = require('../../AuthService/model/apartmentidmodel.js');

exports.addNotification = async function(req, res, next) {
    try {
        const { apartmentID, message, type } = req.body;
        const isapartmentidexist = await ApartmentService.findOne({ apartmentID });

        if (isapartmentidexist) {
            await NotificationService.addNotification(apartmentID, message, type);
            res.status(200).json({ message: 'Notification added' });
        } else {
            res.status(404).json({ message: 'ApartmentId does not exist' });
        }
    } catch (error) {
        next(error);
    }
};

exports.getNotifications = async function(req, res, next) {
    try {
        const { apartmentID } = req.body;
        const notifications = await NotificationService.getNotifications(apartmentID);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.markNotificationAsRead = async function(req, res, next) {
    try {
        const { notificationId } = req.body;
        const updatedNotification = await NotificationService.markAsRead(notificationId);
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
*/

























/*
//const NotificationService = require('../notificationservice/notificationservice.js')
//const ApartmentService = require('../../AuthService/model/apartmentidmodel.js');
const NotificationService = require('../notificationservice/notificationservice.js');
const ApartmentService = require('../../AuthService/model/apartmentidmodel.js');

exports.addNotification = async function(req,res,next){
    try {
        const{apartmentID, message, type} = req.body;
        const isapartmentidexist = await ApartmentService.findOne({apartmentID:apartmentID});
        if(isapartmentidexist){
            await NotificationService.addNotification(apartmentID, message, type);
            res.status(200).json({ message: 'Notification added' });
        }
        else {
            res.status(404).json({ message: 'ApartmentId does not exist' });
        }
    } catch (error) {
        throw error;
    }
}

exports.getNotifications = async function(req,res,next){
    try {
        const {apartmentID} = req.body;
        const notifications = await NotificationService.getNotifications(apartmentID);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.markNotificationAsRead = async function(req,res,next){
    try {
        const {notificationID} = req.body;
        const updatedNotification = await NotificationService.markAsRead(notificationID)
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
*/