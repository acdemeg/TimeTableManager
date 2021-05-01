const passport = require('koa-passport');
const LocalStrategy = require('passport-local');
const { User } = require('@root/models');

const auth = (ctx, next) => {
  if (ctx.isAuthenticated()) {
    next();
  } else ctx.redirect('/');
};

const isAdmin = (ctx, next) => {
  if (ctx.session.passport.user.role === 'ADMIN') {
    next();
  } else ctx.redirect('/');
};

passport.serializeUser((user, done) => {
  done(null, { id: user.id, role: user.role });
});

passport.deserializeUser(async (user, done) => {
  let userDB = await User.findOne({
    where: {
      id: user.id,
    },
    raw: true,
  });

  userDB = userDB.id === user.id ? userDB : false;
  done(null, userDB);
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
        raw: true,
      });

      if (user && user.email === email && user.password === password) {
        done(null, user);
      } else {
        done(null, false, { message: 'Incorrect username or password' });
      }
    } catch (err) {
      done(err);
    }
  }),
);

module.exports.passport = passport;
module.exports.auth = auth;
module.exports.isAdmin = isAdmin;
