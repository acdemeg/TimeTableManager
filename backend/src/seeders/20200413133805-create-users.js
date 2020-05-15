'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@google.com',
        password: 'admin_passw',
        role: 'ADMIN',
      },
      {
        name: 'John Doe',
        email: 'joo@google.com',
        password: 'john_passw',
        role: 'USER',
      },
      {
        name: 'Michail',
        email: 'micha@mail.ru',
        password: 'mich_passw',
        role: 'USER',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
