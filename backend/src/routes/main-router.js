const usersRouter = require('./users-router');
const ordersRouter = require('./orders-router');
const timetablesRouter = require('./timetables-router');
const notificationsRouter = require('./notifications-router');
const Router = require('koa-router');
const rootRouter = new Router();

rootRouter
  .use('/users', usersRouter.routes(), usersRouter.allowedMethods())
  .use('/orders', ordersRouter.routes(), ordersRouter.allowedMethods())
  .use('/timetables', timetablesRouter.routes(), timetablesRouter.allowedMethods())
  .use('/notifications', notificationsRouter.routes(), notificationsRouter.allowedMethods());

module.exports = rootRouter;
