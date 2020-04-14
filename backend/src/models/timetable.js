'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeTable = sequelize.define(
    'TimeTable',
    {
      title: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      slotSize: DataTypes.ENUM('HOUR', 'DAY', 'WEEK'),
      attributeRequire: DataTypes.BOOLEAN,
    },
    {},
  );
  TimeTable.associate = function(models) {};
  return TimeTable;
};
