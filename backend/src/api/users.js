const { User, Session } = require('@root/models');
const { passport } = require('@root/passport');

const users = {
  getUsers: async () => {
    return await User.findAll().catch(err => `can't get users ${err}`);
  },
  logIn: async (ctx, next) => {
    await passport.authenticate('local', async function(err, user) {
      console.log('passport.authenticate');
      if (err) {
        console.log('authenticate error ', err);
        next(err);
      }
      if (!user) {
        console.log('authenticate wrong email or password ', err);
        return (ctx.body = 'wrong email or password');
      }
      ctx.logIn(user, async function(err) {
        console.log('ctx.logIn ', user);
        if (err) {
          console.log('ctx.login error ', err);
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
    console.log('ctx.session.externalKey ', ctx.session._sessCtx.externalKey);
    ctx.session._sessCtx.passport = null;
    ctx.redirect('/');

    await Session.destroy({
      where: { id: ctx.session._sessCtx.externalKey },
      row: true,
    });

    console.log('session destroy');
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
