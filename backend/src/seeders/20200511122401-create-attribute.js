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
        title: 'Count people',
        type_attr: 'NUMBER',
        isRequired: false,
        timeTableId: 1,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Attributes', null, {});
  },
};
