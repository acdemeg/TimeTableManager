'use strict';

module.exports = (sequelize, DataTypes) => {
  const TimeTable = sequelize.define(
    'TimeTable',
    {
      title: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      slotSize: DataTypes.ENUM('HOUR', 'DAY', 'WEEK'),
    },
    {},
  );
  TimeTable.associate = function(models) {
    TimeTable.hasMany(models.Order);
    TimeTable.hasMany(models.Attribute);
    TimeTable.hasMany(models.AttributeValue);
  };
  return TimeTable;
};
