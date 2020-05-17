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
        value: 'Count people 10',
      },
      {
        timeTableId: 1,
        attributeId: 1,
        orderId: 3,
        value: 'JAVA Conference',
      },
      {
        timeTableId: 1,
        attributeId: 1,
        orderId: 1,
        value: 'IT-Boroda',
      },
      {
        timeTableId: 4,
        attributeId: 4,
        orderId: 5,
        value: 'WCG',
      },
      {
        timeTableId: 8,
        attributeId: 5,
        orderId: 4,
        value: 'ESL',
      },
      {
        timeTableId: 1,
        attributeId: 2,
        orderId: 3,
        value: 'Count people 25',
      },
      {
        timeTableId: 2,
        attributeId: 3,
        orderId: 6,
        value: 'CodeWars',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('AttributeValues', null, {});
  },
};
