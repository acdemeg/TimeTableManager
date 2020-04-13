'use strict';
module.exports = (sequelize, DataTypes) => {
  const TimeTable = sequelize.define(
    'TimeTable',
    {
      title: DataTypes.STRING,
      startDate: DataTypes.INTEGER,
      endDate: DataTypes.INTEGER,
      slotSize: DataTypes.ENUM('HOUR', 'DAY', 'WEEK'),
    },
    {},
  );
  TimeTable.associate = function(models) {
    // associations can be defined here
  };
  return TimeTable;
};
