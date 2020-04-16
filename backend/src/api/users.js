const { User, EmailPasswordMap } = require('@root/models');

const users = {
  getUsers: async () => {
    return await User.findAll().catch(err => `can't get users ${err}`);
  },
  logIn: async user => {
    return await EmailPasswordMap.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    })
      .then(res => users.getProfileById(res.userId))
      .catch(err => `reject logIn ${err}`);
  },
  register: async user => {
    return await User.create({
      firstName: user.name,
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
      .catch(err => `reject registration ${err}`);
  },
  getProfileById: async userId => {
    return await User.findOne({ where: { id: userId } });
  },
  updateProfileById: async (id, obj) => {
    const user = await users.getProfileById(id).catch(err => `can't get user ${err}`);
    user.firstName = obj.firstName;
    user.lastName = obj.lastName;
    user.email = obj.email;
    await user.save().catch(err => `can't update profile ${err}`);
    return await users.getProfileById(id).catch(err => `can't get user ${err}`);
  },
  deleteProfileById: async id => {
    return 'deleteProfileById';
  },
  getReservationsListByUserId: async id => {
    return 'getReservationsListByUserId';
  },
};

module.exports = users;
