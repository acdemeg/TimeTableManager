const Router = require('koa-router');
const { notifications } = require('@root/api');
const notificationsRouter = new Router();
// const { auth, isAdmin } = require('@root/passport');

notificationsRouter.put(
  '/:id',
  /* auth, isAdmin */ async ctx => {
    ctx.body = await notifications.updateStatusNotificationById(ctx.params.id, ctx.request.body);
  },
);

module.exports = notificationsRouter;
