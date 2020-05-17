'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Orders', [
      {
        authorId: 1,
        authorName: 'Admin',
        startDate: new Date(Date.parse('2020-04-14T19:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-14T20:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 1,
      },
      {
        authorId: 2,
        authorName: 'John Doe',
        startDate: new Date(Date.parse('2020-04-09T19:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-09T20:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 1,
      },
      {
        authorId: 2,
        authorName: 'John Doe',
        startDate: new Date(Date.parse('2020-04-12T19:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-12T20:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 1,
      },
      {
        authorId: 3,
        authorName: 'Michail',
        startDate: new Date(Date.parse('2020-06-08T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-06-08T19:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 4,
      },
      {
        authorId: 3,
        authorName: 'Michail',
        startDate: new Date(Date.parse('2020-09-03T01:00:00.000Z')),
        endDate: new Date(Date.parse('2020-09-03T02:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 8,
      },
      {
        authorId: 2,
        authorName: 'John Doe',
        startDate: new Date(Date.parse('2020-02-22T00:00:00.000Z')),
        endDate: new Date(Date.parse('2020-02-22T01:00:00.000Z')),
        status: 'CREATED',
        timeTableId: 2,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
