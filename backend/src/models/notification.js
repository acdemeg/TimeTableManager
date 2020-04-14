'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    'Notification',
    {
      orderId: DataTypes.INTEGER,
      type: DataTypes.ENUM('ORDER_CREATED', 'ORDER_ACCEPTED', 'ORDER_CANCELED', 'ORDER_DELETED'),
      isRead: DataTypes.BOOLEAN,
    },
    {},
  );
  Notification.associate = function(models) {
    // associations can be defined here
  };
  return Notification;
};
