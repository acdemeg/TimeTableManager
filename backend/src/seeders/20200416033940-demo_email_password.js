'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Email_Password_Maps', [
      {
        email: 'joo@google.com',
        password: 'myPassw',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Email_Password_Maps', null, {});
  },
};
