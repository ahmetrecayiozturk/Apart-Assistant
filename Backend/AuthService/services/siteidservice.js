const siteIDmodel = require('../model/siteidmodel.js');

class SiteIDService {
    static async addSiteId(siteID){
        try {
            const newSiteID = new siteIDmodel({siteID : siteID});
            return await newSiteID.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SiteIDService;
/*
static async addSiteId(res,req,next){
        try {
            const {siteID} = req.body;
            const newSiteID = new siteIDmodel({siteID:siteID});
            await newSiteID.save();
            res.status(200).json({message:'SiteID added'});
        } catch (error) {
            next(error);
        }
    }
*/