'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sid: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      sess: {
        allowNull: false,
        type: Sequelize.JSONB,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sessions');
  },
};
