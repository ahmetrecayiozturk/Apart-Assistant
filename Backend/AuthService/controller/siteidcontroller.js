const SiteIDService = require('../services/siteidservice.js');
const SiteIDModel = require('../model/siteidmodel.js');
exports.addSiteID = async function(req, res, next){
    try {
        const { siteID } = req.body;
        const issiteidexits = await SiteIDModel.findOne({siteID:siteID});
        if(!issiteidexits){
            await SiteIDService.addSiteId(siteID);
            res.status(200).json({message:'SiteID added successfully'});
            /*
            const newSiteID = new SiteIDModel({ siteID: siteID });
            await newSiteID.save();
            res.status(200).json({ message: 'SiteID added' });
            */
        }
        else{
            res.status(200).json({ message: 'ApartmentId already exist' });
        }
    } catch (error) {
        next(error);
    }
}