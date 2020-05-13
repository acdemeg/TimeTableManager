'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('AttributeValues', [
      {
        timeTableId: 1,
        attributeId: 1,
        orderId: 2,
        value: 'Meeting',
      },
      {
        timeTableId: 1,
        attributeId: 2,
        orderId: 2,
        value: '15',
      },
      {
        timeTableId: 1,
        attributeId: 1,
        orderId: 3,
        value: 'JAVA Conference',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('AttributeValues', null, {});
  },
};
