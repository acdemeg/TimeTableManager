'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Orders', [
      {
        author: 'John Doe',
        startDate: new Date(),
        endDate: new Date(),
        status: 'CREATED',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
