const passport = require('koa-passport');
const LocalStrategy = require('passport-local');
const { User } = require('@root/models');

const auth = (ctx, next) => {
  console.log('isAuthenticated ', ctx.session);
  if (ctx.isAuthenticated()) {
    next();
  } else ctx.redirect('/');
};

const isAdmin = (ctx, next) => {
  console.log('isAdmin ', ctx.session.passport);
  if (ctx.session.passport.user.role === 'ADMIN') {
    next();
  } else ctx.redirect('/');
};

passport.serializeUser((user, done) => {
  console.log('Serialization', user);
  done(null, { id: user.id, role: user.role });
});

passport.deserializeUser(async (user, done) => {
  console.log('Deserialization', user);
  let userDB = await User.findOne({
    where: {
      id: user.id,
    },
    raw: true,
  });
  console.log('userDB', userDB);

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
      console.log('LocalStrategy', user);

      if (user && user.email === email && user.password === password) {
        console.log('done(null, user)', user);
        done(null, user);
      } else {
        console.log('done(null, false);', user);
        done(null, false, { message: 'Incorrect username or password' });
      }
    } catch (err) {
      console.log('done(err);', err);
      done(err);
    }
  }),
);

module.exports.passport = passport;
module.exports.auth = auth;
module.exports.isAdmin = isAdmin;
