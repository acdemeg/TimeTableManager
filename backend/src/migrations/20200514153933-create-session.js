'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
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
