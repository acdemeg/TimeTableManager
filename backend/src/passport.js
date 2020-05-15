const passport = require('koa-passport');
const LocalStrategy = require('passport-local');
const { User } = require('@root/models');

// const userDB = {
//   id: 1,
//   email: "admin@google.com",
//   password: "admin_passw"
// }

passport.serializeUser((user, done) => {
  console.log('Serialization', user);
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  console.log('Deserialization', userId);
  let user = await User.findOne({
    where: {
      id: userId,
    },
    raw: true,
  });
  console.log('userDB', user);
  console.log('userid', userId);

  user = user.id === userId ? user : false;
  done(null, user);
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

module.exports = passport;
