'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('TimeTables', [
      {
        id: 1,
        title: 'my schedule',
        startDate: new Date(),
        endDate: new Date(),
        slotSize: 'HOUR',
        attributeRequire: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('TimeTables', null, {});
  },
};
