'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmailPasswordMap = sequelize.define(
    'Email_Password_Map',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {},
  );
  EmailPasswordMap.associate = function(models) {
    models.User.hasOne(EmailPasswordMap, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return EmailPasswordMap;
};
