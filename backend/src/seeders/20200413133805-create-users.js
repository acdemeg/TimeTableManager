'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'joo@google.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
