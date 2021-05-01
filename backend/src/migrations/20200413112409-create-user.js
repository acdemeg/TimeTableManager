'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM('USER', 'ADMIN'),
        defaultValue: 'USER',
        allowNull: false,
      },
      imagePath: {
        type: Sequelize.STRING,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Users');
  },
};
