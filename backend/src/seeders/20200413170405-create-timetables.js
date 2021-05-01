'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('TimeTables', [
      {
        title: 'DevOps Battle 2.2',
        startDate: new Date(Date.parse('2020-04-09T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-15T17:00:00.000Z')),
        slotSize: 'HOUR',
      },
      {
        title: 'Skolkovo Junior Challenge 2020',
        startDate: new Date(Date.parse('2020-02-19T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-02-25T17:00:00.000Z')),
        slotSize: 'HOUR',
      },
      {
        title: 'Moscow JS Meetup',
        startDate: new Date(Date.parse('2020-04-16T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-04-21T17:00:00.000Z')),
        slotSize: 'HOUR',
      },
      {
        title: 'ISDEF Spring 2020',
        startDate: new Date(Date.parse('2020-06-07T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-06-28T17:00:00.000Z')),
        slotSize: 'DAY',
      },
      {
        title: 'HackTheRealty',
        startDate: new Date(Date.parse('2020-07-05T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-08-16T17:00:00.000Z')),
        slotSize: 'DAY',
      },
      {
        title: 'MCOM Foodtech Anticrisis',
        startDate: new Date(Date.parse('2020-05-03T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-05-31T17:00:00.000Z')),
        slotSize: 'DAY',
      },
      {
        title: 'Serverless Architecture Conference 2020',
        startDate: new Date(Date.parse('2020-06-30T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-07-05T17:00:00.000Z')),
        slotSize: 'HOUR',
      },
      {
        title: 'HR API Online-marathon 2020',
        startDate: new Date(Date.parse('2020-09-02T18:00:00.000Z')),
        endDate: new Date(Date.parse('2020-09-05T17:00:00.000Z')),
        slotSize: 'HOUR',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('TimeTables', null, {});
  },
};
