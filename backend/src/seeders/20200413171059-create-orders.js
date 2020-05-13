'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Orders', [
      {
        authorId: 1,
        startDate: new Date(Date.parse('2020-04-11T16:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-11T17:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 1,
      },
      {
        authorId: 2,
        startDate: new Date(Date.parse('2020-04-11T16:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-11T17:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 1,
      },
      {
        authorId: 2,
        startDate: new Date(Date.parse('2020-04-11T16:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-11T17:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 1,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
