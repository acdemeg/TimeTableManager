const { User, Session } = require('@root/models');
const { passport } = require('@root/passport');

const users = {
  getUsers: async () => {
    return await User.findAll().catch(err => `can't get users ${err}`);
  },
  logIn: async (ctx, next) => {
    await passport.authenticate('local', async function(err, user) {
      if (err) {
        next(err);
      }
      if (!user) {
        return (ctx.body = 'wrong email or password');
      }
      ctx.logIn(user, async function(err) {
        if (err) {
          return next(err);
        }
        return (ctx.body = {
          id: user.id,
          name: user.name,
          email: user.email,
        });
      });
    })(ctx);
  },
  logOut: async ctx => {
    ctx.session._sessCtx.passport = null;

    const res = await Session.destroy({
      where: { id: ctx.session._sessCtx.externalKey },
      row: true,
    });

    return res;
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
        return `reject registration ${err}`;
      });
  },
  getProfileById: async userId => {
    return await User.findOne({ where: { id: userId } }).catch(
      err => `can't find user with id = ${userId} ${err}`,
    );
  },
  getProfile: async () => {
    return 'Profile';
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
