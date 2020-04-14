'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      authorId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      status: DataTypes.ENUM('CREATED', 'ACCEPTED', 'CANCELED'),
      attributeTitle: DataTypes.STRING,
      attributeDescription: DataTypes.STRING,
      timeTableId: DataTypes.INTEGER,
    },
    {},
  );
  Order.associate = function(models) {
    Order.belongsTo(models.TimeTable);
  };
  return Order;
};
