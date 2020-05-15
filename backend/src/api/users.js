const { User } = require('@root/models');

const users = {
  getUsers: async () => {
    return await User.findAll().catch(err => `can't get users ${err}`);
  },
  logIn: async ctx => {
    const user = ctx.request.body;
    return await User.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    })
      .then(user => {
        if (user) {
          const { id, name, email } = user;
          return {
            id,
            name,
            email,
          };
        } else {
          ctx.status = 401;
          return 'Invalid password or email';
        }
      })
      .catch(err => `reject logIn ${err}`);
  },
  register: async ctx => {
    const user = ctx.request.body;
    return await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
    })
      .then(() => 'succses registration')
      .catch(err => {
        ctx.status = 500;
        ctx.response.send(`reject registration ${err}`);
      });
  },
  getProfileById: async userId => {
    return await User.findOne({ where: { id: userId } }).catch(
      err => `can't find user with id = ${userId} ${err}`,
    );
  },
  updateProfileById: async (userId, obj) => {
    return await User.update({ name: obj.name }, { where: { id: userId } }).catch(
      err => `can't update profile ${err}`,
    );
  },
  deleteProfileById: async userId => {
    return await User.destroy({
      where: {
        id: userId,
      },
    })
      .then(res => (res ? 'succses delete profile' : `user with id = ${userId} doesn't exist`))
      .catch(err => `reject delete profile ${err}`);
  },
};

module.exports = users;
