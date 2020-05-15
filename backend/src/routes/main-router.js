// const usersRouter = require('./users-router');
// const ordersRouter = require('./orders-router');
// const timetablesRouter = require('./timetables-router');
// const notificationsRouter = require('./notifications-router');
const Router = require('koa-router');
const rootRouter = new Router();
const passport = require('../passport');
const { Session } = require('@root/models');

const auth = (ctx, next) => {
  console.log('isAuthenticated ', ctx.session);
  if (ctx.isAuthenticated()) {
    next();
  } else ctx.redirect('/');
};

rootRouter
  // .use('/users', usersRouter.routes(), usersRouter.allowedMethods())
  // .use('/orders', ordersRouter.routes(), ordersRouter.allowedMethods())
  // .use('/timetables', timetablesRouter.routes(), timetablesRouter.allowedMethods())
  // .use('/notifications', notificationsRouter.routes(), notificationsRouter.allowedMethods());
  .get('/admin', auth, async function(ctx) {
    ctx.body = 'Admin page';
  })
  .get('/logout', auth, async function(ctx) {
    console.log('ctx.session.externalKey ', ctx.session._sessCtx.externalKey);
    ctx.session._sessCtx.passport = null;
    ctx.redirect('/');

    await Session.destroy({
      where: { sid: ctx.session._sessCtx.externalKey },
      row: true,
    });

    console.log('session destroy');

    // ctx.logout();
  })
  .post('/login', async function(ctx, next) {
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
        return ctx.redirect('/admin');
      });
    })(ctx);
  });

module.exports = rootRouter;
