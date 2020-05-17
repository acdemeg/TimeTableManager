'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      authorId: DataTypes.INTEGER,
      authorName: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      status: DataTypes.ENUM('CREATED', 'ACCEPTED', 'CANCELED'),
      timeTableId: DataTypes.INTEGER,
    },
    {},
  );
  Order.associate = function(models) {
    Order.hasMany(models.AttributeValue);
    Order.belongsTo(models.TimeTable);
    Order.belongsTo(models.User);
  };
  return Order;
};
