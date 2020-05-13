const { Notification } = require('@root/models');

const notifications = {
  getNotificationsForUserById: async userId => {
    return await Notification.findAll({ where: { userId: userId } }).catch(
      err => `can't find notifications of user with id = ${userId} ${err}`,
    );
  },
  updateStatusNotificationById: async (notificationId, obj) => {
    return await Notification.update({ type: obj.type }, { where: { id: notificationId } }).catch(
      err => `can't update notification status ${err}`,
    );
  },
};

module.exports = notifications;
