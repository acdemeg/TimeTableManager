'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Attributes', [
      {
        title: 'Name Event',
        type_attr: 'STRING',
        isRequired: true,
        timeTableId: 1,
      },
      {
        title: 'Description',
        type_attr: 'STRING',
        isRequired: false,
        timeTableId: 1,
      },
      {
        title: 'Event',
        type_attr: 'STRING',
        isRequired: true,
        timeTableId: 2,
      },
      {
        title: 'Date',
        type_attr: 'DATE',
        isRequired: false,
        timeTableId: 2,
      },
      {
        title: 'Event name',
        type_attr: 'STRING',
        isRequired: true,
        timeTableId: 3,
      },
      {
        title: 'Measure',
        type_attr: 'STRING',
        isRequired: true,
        timeTableId: 4,
      },
      {
        title: 'Arrangement',
        type_attr: 'STRING',
        isRequired: true,
        timeTableId: 8,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Attributes', null, {});
  },
};
