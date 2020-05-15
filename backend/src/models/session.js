'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    'Session',
    {
      sess: DataTypes.JSONB,
    },
    {},
  );
  Session.associate = function(models) {};
  return Session;
};
