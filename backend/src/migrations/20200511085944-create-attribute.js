'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_attr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isRequired: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      timeTableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TimeTables', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Attributes');
  },
};
