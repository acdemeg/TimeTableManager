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
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Attributes', null, {});
  },
};
