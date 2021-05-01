'use strict';

module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    'Notification',
    {
      orderId: DataTypes.INTEGER,
      type: DataTypes.ENUM('ORDER_CREATED', 'ORDER_ACCEPTED', 'ORDER_CANCELED', 'ORDER_DELETED'),
      isRead: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {},
  );
  Notification.associate = function(models) {
    Notification.belongsTo(models.User);
  };
  return Notification;
};
