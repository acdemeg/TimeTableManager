'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@google.com',
        password: 'admin_passw',
      },
      {
        name: 'John Doe',
        email: 'joo@google.com',
        password: 'user_passw',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
