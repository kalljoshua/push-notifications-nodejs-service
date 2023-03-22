const pushNotificationController = require('../controllers/push-notification.controllers.js');
const express = require("express");
const router = express.Router();

// Send push notifications to all subscribers
router.get("/SendPushNotification", pushNotificationController.SendPushNotification);
// Send push notifications to Single device
router.post("/SendPushNotificationToDevice", pushNotificationController.SendPushNotificationToDevice);

module.exports = router;