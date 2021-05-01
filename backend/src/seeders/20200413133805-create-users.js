'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@google.com',
        password: 'admin_passw',
        role: 'ADMIN',
        imagePath: 'user_avatar_1.png',
      },
      {
        name: 'John Doe',
        email: 'joo@google.com',
        password: 'john_passw',
        role: 'USER',
        imagePath: 'user_avatar_2.png',
      },
      {
        name: 'Michail',
        email: 'micha@mail.ru',
        password: 'mich_passw',
        role: 'USER',
        imagePath: 'user_avatar_3.png',
      },
      {
        name: 'Ivan',
        email: 'iv@mail.ru',
        password: 'iv_passw',
        role: 'USER',
        imagePath: 'user_avatar_4.png',
      },
      {
        name: 'Petr',
        email: 'Petr@mail.ru',
        password: 'Petr_passw',
        role: 'USER',
        imagePath: 'user_avatar_5.png',
      },
      {
        name: 'Dima',
        email: 'Dima@mail.ru',
        password: 'Dima_passw',
        role: 'USER',
        imagePath: 'user_avatar_6.png',
      },
      {
        name: 'Anton',
        email: 'Anton@mail.ru',
        password: 'Anton_passw',
        role: 'USER',
        imagePath: 'user_avatar_7.png',
      },
      {
        name: 'Joseph',
        email: 'Joseph@mail.ru',
        password: 'Joseph_passw',
        role: 'USER',
        imagePath: 'user_avatar_8.png',
      },
      {
        name: 'Micle',
        email: 'Micle@mail.ru',
        password: 'Micle_passw',
        role: 'USER',
        imagePath: 'user_avatar_9.png',
      },
      {
        name: 'Luisa',
        email: 'Luisa@mail.ru',
        password: 'Luisa_passw',
        role: 'USER',
        imagePath: 'user_avatar_10.png',
      },
      {
        name: 'Sebastian',
        email: 'Sebastian@mail.ru',
        password: 'Sebastian_passw',
        role: 'USER',
        imagePath: 'user_avatar_11.png',
      },
      {
        name: 'Vika',
        email: 'Vika@mail.ru',
        password: 'Vika_passw',
        role: 'USER',
        imagePath: 'user_avatar_12.png',
      },
      {
        name: 'Polina',
        email: 'Polina@mail.ru',
        password: 'Polina_passw',
        role: 'USER',
        imagePath: 'user_avatar_13.png',
      },
      {
        name: 'Achmed',
        email: 'Achmed@mail.ru',
        password: 'Achmed_passw',
        role: 'USER',
        imagePath: 'user_avatar_14.png',
      },
      {
        name: 'Kim_Chen_In',
        email: 'Kim_Chen_In@mail.ru',
        password: 'Kim_Chen_In_passw',
        role: 'USER',
        imagePath: 'user_avatar_15.png',
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
