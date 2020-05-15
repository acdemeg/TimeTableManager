'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    'Session',
    {
      sid: DataTypes.UUID,
      sess: DataTypes.JSONB,
    },
    {},
  );
  Session.associate = function(models) {};
  return Session;
};
