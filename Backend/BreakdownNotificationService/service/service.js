const BreakdownNotificationModel = require('../model/model.js');
const ApartmentIdModel = require('../../AuthService/model/apartmentidmodel.js');
const SiteIdModel = require('../../AuthService/model/siteidmodel.js');

class BreakdownNotificationService {
    static async addBreakdownNotification (siteID, apartmentID, notification){
        try {
            const isapartmentexits = await ApartmentIdModel.findOne({apartmentID: apartmentID});
            const issiteexist = await SiteIdModel.findOne({siteID: siteID});
            if(isapartmentexits && issiteexist){
                const BreakdownNotification = new BreakdownNotificationModel({siteID: siteID, apartmentID: apartmentID, notification: notification})
                await BreakdownNotification.save();
            }
            else{
                res.status(404).json({message : "Apartment or Site does not exist"});
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BreakdownNotificationService;
/*
    static async addBreakdownNotification({siteID, apartmentID, notification, date}){
        try {
            const breakdownNotification = new BreakdownNotificationModel({siteID, apartmentID, notification, date});
            await breakdownNotification.save();
            return breakdownNotification;
        } catch (error) {
            throw error;
        }
    }
*/