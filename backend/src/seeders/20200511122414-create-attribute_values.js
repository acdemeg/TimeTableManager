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
      {
        timeTableId: 1,
        attributeId: 1,
        orderId: 7,
        value: 'Golang-conferece',
      },
      {
        timeTableId: 1,
        attributeId: 2,
        orderId: 7,
        value: 'max count people 50',
      },
      {
        timeTableId: 2,
        attributeId: 3,
        orderId: 8,
        value: 'Day open doors',
      },
      {
        timeTableId: 2,
        attributeId: 4,
        orderId: 8,
      },
      {
        timeTableId: 2,
        attributeId: 3,
        orderId: 9,
        value: 'Coronavirus Info',
      },
      {
        timeTableId: 2,
        attributeId: 4,
        orderId: 9,
      },
      {
        timeTableId: 8,
        attributeId: 7,
        orderId: 10,
        value: 'English for developers',
      },
      {
        timeTableId: 4,
        attributeId: 6,
        orderId: 11,
        value: 'Halloween',
      },
      {
        timeTableId: 4,
        attributeId: 6,
        orderId: 12,
        value: 'Day of Great Macaroni Monster',
      },
      {
        timeTableId: 3,
        attributeId: 5,
        orderId: 13,
        value: 'Moscow meetup',
      },
      {
        timeTableId: 4,
        attributeId: 6,
        orderId: 14,
        value: 'Day of Remembrance Smalltalk',
      },
      {
        timeTableId: 4,
        attributeId: 6,
        orderId: 20,
        value: 'Day of Linux Admins',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('AttributeValues', null, {});
  },
};
