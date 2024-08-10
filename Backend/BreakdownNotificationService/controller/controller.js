const BreakdownNotificationService = require('../service/service.js');

exports.addBreakdownNotification= async function(req,res,next){
    try {
        const{siteID,apartmentID,notification} = req.body;
        await BreakdownNotificationService.addBreakdownNotification(siteID,apartmentID,notification);
        res.status(200).json({message:'Breakdown notification added successfully'});
    } catch (error) {
        next(error);
    }
}



/*
exports.addBreakdownNotification = async function(req, res, next) {
    try {
        const { siteID, apartmentID, notification } = req.body;
        await BreakdownNotificationService.addBreakdownNotification(siteID, apartmentID, notification);
        res.status(200).json({ message: 'Breakdown Notification added' });
    } catch (error) {
        next(error);
    }
}
*/
/*
    try {
        await BreakdownNotificationService.addBreakdownNotification(req, res, next);
    } catch (error) {
        next(error);
    }
*/