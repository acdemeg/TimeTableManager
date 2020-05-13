const Router = require('koa-router');
const { notifications } = require('@root/api');
const notificationsRouter = new Router();

notificationsRouter.put('/:id', async ctx => {
  ctx.body = await notifications.updateStatusNotificationById(ctx.params.id, ctx.request.body);
});

module.exports = notificationsRouter;
