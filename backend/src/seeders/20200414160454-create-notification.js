'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Notifications', [
      {
        orderId: 1,
        type: 'ORDER_CREATED',
        isRead: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Notifications', null, {});
  },
};
