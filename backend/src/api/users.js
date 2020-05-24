const { User, Session } = require('@root/models');
// const { passport } = require('@root/passport');

const users = {
  getUsers: async () => {
    return await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    }).catch(err => `can't get users ${err}`);
  },
  logIn: async (ctx, next) => {
    /* await passport.authenticate('local', async function(err, user) {
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
          role: user.role,
        });
      });
    })(ctx); */

    const user = await User.findOne({ where: { email: ctx.request.body.email } }).catch(
      err => `user not found ${err}`,
    );

    if (user.password === ctx.request.body.password) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        imagePath: user.imagePath,
      };
    } else return 'wrong email or password';
  },
  logOut: async ctx => {
    // ctx.session._sessCtx.passport = null;

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
    const [res] = await User.update(
      { name: obj.name, email: obj.email },
      { where: { id: userId } },
    ).catch(err => `can't update profile ${err}`);
    return res;
  },
  deleteProfileById: async userId => {
    const res = await User.destroy({
      where: {
        id: userId,
      },
    })
      .then(res => (res ? 'succses delete profile' : `user with id = ${userId} doesn't exist`))
      .catch(err => `reject delete profile ${err}`);

    if (res) {
      return 'success';
    }
    return 'error';
  },
};

module.exports = users;
