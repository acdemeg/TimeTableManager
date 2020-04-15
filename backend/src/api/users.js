// const HttpStatus = require('http-status-codes');
const { User, EmailPasswordMap } = require('@root/models');

const users = {
  getUsers: async () => {
    return 'Users';
  },
  logIn: async user => {
    return await EmailPasswordMap.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    })
      .then(res => res)
      .catch(() => 'reject login');
  },
  register: async user => {
    return await User.create({
      name: user.name,
      email: user.email,
    })
      .then(userRecord => {
        EmailPasswordMap.create({
          email: userRecord.email,
          password: user.password,
          userId: userRecord.id,
        });
      })
      .then(() => 'succses registration')
      .catch(() => 'reject registration');
  },
  getProfileById: async userId => {
    return await User.findOne({ where: { id: userId } });
  },
  updateProfileById: async id => {
    return 'updateProfileOfUser';
  },
  deleteProfileById: async id => {
    return 'deleteProfileById';
  },
  getReservationsListByUserId: async id => {
    return 'getReservationsListByUserId';
  },
};

module.exports = users;
