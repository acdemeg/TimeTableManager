'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      author: DataTypes.STRING,
      startDate: DataTypes.INTEGER,
      endDate: DataTypes.INTEGER,
      status: DataTypes.ENUM('CREATED', 'ACCEPTED', 'CANCELED'),
    },
    {},
  );
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
