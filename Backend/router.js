const router = require('express').Router();
const UserController = require('./AuthService/controller/user_controller.js');
const PublicMessageController = require('./MessageService/messagecontroller/publicmessagecontroller.js');
const PrivateMessageController = require('./MessageService/messagecontroller/privatemessagecontroller.js');
const ApartmentIdController = require('./AuthService/controller/apartmentidcontroller.js');
const NotificationController = require('./NotificationService/notificationcontroller/notificationcontroller.js'); // Yolu doğru kontrol edin
const SiteIDController = require('./AuthService/controller/siteidcontroller.js');
const BreakdownNotificationController = require('./BreakdownNotificationService/controller/controller.js');
router.post('/registration', (req, res, next) => {
    UserController.register(req, res, next);
});

router.post('/login', (req, res, next) => {
    UserController.login(req, res, next);
});

router.post('/post-private-messages', (req, res, next) => {
    PrivateMessageController.addPrivateMessageForUser(req, res, next);
});

router.post('/post-public-messages', (req, res, next) => {
    PublicMessageController.addPublicMessage(req, res, next);
});

router.post('/add-apartmentid', (req, res, next) => {
    ApartmentIdController.addApartmentId(req, res, next);
});

router.post('/add-notification', (req, res, next) => {
    NotificationController.addNotification(req, res, next);
});

router.post('/add-siteid', (req, res, next) => {
    SiteIDController.addSiteID(req, res, next);
});

router.post('/add-breakdownnotification', (req, res, next) =>{
    BreakdownNotificationController.addBreakdownNotification(req, res, next);
})
router.get('/get-notifications', (req, res, next) => {
    NotificationController.getNotifications(req, res, next);
});

router.post('/mark-notification-as-read', (req, res, next) => {
    NotificationController.markNotificationAsRead(req, res, next);
});

router.get('/get-private-messages', (req, res, next) => {
    PrivateMessageController.getPrivateMessagesForUser(req, res, next);
});

router.get('/get-public-messages', (req, res, next) => {
    PublicMessageController.getPublicMessages(req, res, next);
});

module.exports = router;


//----------------------------------------------------------------------------------------------------------------------------------
/*const router = require('express').Router();
const UserController = require('./AuthService/controller/user_controller.js');
const PublicMessageController = require('./MessageService/messagecontroller/publicmessagecontroller.js');
const PrivateMessageController = require('./MessageService/messagecontroller/privatemessagecontroller.js');
const ApartmentIdController = require('./AuthService/controller/apartmentidcontroller.js');
router.post('/registration', (req, res, next) => {
    UserController.register(req, res, next);
});

router.post('/login', (req, res, next) => {
    UserController.login(req, res, next);
});

router.post('/post-private-messages', (req, res, next) => {
    PrivateMessageController.addPrivateMessageForUser(req, res, next);
});

router.post('/post-public-messages', (req, res, next) => {
    PublicMessageController.addPublicMessage(req, res, next);
});

router.post('/add-apartmentid',(req, res, next) => {
    ApartmentIdController.addApartmentId(req, res, next);
})

router.get('/get-private-messages', (req, res, next) => {
    PrivateMessageController.getPrivateMessagesForUser(req, res, next);
});

router.get('/get-public-messages', (req, res, next) => {
    PublicMessageController.getPublicMessages(req, res, next);
});
module.exports = router;
*/