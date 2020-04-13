'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('TimeTables', [
      {
        title: 'my schedule',
        startDate: new Date(),
        endDate: new Date(),
        slotSize: 'HOUR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('TimeTables', null, {});
  },
};
