'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Notifications', [
      {
        orderId: 2,
        type: 'ORDER_CREATED',
        isRead: false,
        userId: 2,
      },
      {
        orderId: 2,
        type: 'ORDER_CANCELED',
        isRead: false,
        userId: 2,
      },
      {
        orderId: 3,
        type: 'ORDER_ACCEPTED',
        isRead: false,
        userId: 2,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Notifications', null, {});
  },
};
