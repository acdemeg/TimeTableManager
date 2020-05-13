'use strict';
module.exports = (sequelize, DataTypes) => {
  const AttributeValue = sequelize.define(
    'AttributeValue',
    {
      timeTableId: DataTypes.INTEGER,
      attributeId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      value: DataTypes.STRING,
    },
    {},
  );
  AttributeValue.associate = function(models) {
    AttributeValue.belongsTo(models.Order);
  };
  return AttributeValue;
};
