const { ONE_SIGNAL_CONFIG } = require("../config/app.config.js");
const pushNotificationService = require("../services/push-notification.services.js");

const notificationData = {
    title: 'Order Approved',
    message: 'Order has been approved',
    operation: 'approved',
    transaction_id: '12345'
};



exports.SendPushNotification = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { "en": notificationData.message },
        included_segments: ["All"],
        content_available: true,
        small_icon: "ic_notification_icon",
        headings: {
            en: notificationData.title // Set the title from your notification object
        },
        data: {
            operation: notificationData.operation, // Set the operation from your notification object
            transaction_id: notificationData.transaction_id // Set the transaction ID from your notification object
        },

    }


    pushNotificationService.SendNotification(message, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "success",
            data: results
        })
    });
};


exports.SendPushNotificationToDevice = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: { "en": notificationData.message },
        included_segments: ["included_player_ids"],
        include_player_ids: req.body.devices,
        content_available: true,
        small_icon: "ic_notification_icon",
        headings: {
            en: notificationData.title // Set the title from your notification object
        },
        data: {
            operation: notificationData.operation, // Set the operation from your notification object
            transaction_id: notificationData.transaction_id // Set the transaction ID from your notification object
        },
    }

    pushNotificationService.SendNotification(message, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "success",
            data: results
        })
    });
};