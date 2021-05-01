'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM('USER', 'ADMIN'),
      imagePath: DataTypes.STRING,
    },
    {},
  );
  User.associate = function(models) {
    User.hasOne(models.Notification);
  };
  return User;
};
