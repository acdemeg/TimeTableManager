'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Orders', [
      {
        authorId: 1,
        startDate: new Date(),
        endDate: new Date(),
        status: 'CREATED',
        attributeTitle: 'Meeting',
        attributeDescription: 'hackathon js',
        timeTableId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
