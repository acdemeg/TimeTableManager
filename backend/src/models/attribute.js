'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define(
    'Attribute',
    {
      title: DataTypes.STRING,
      type_attr: DataTypes.STRING,
      isRequired: DataTypes.BOOLEAN,
      timeTableId: DataTypes.INTEGER,
    },
    {},
  );
  Attribute.associate = function(models) {
    Attribute.belongsTo(models.TimeTable);
  };
  return Attribute;
};
