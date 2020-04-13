const Router = require('koa-router');

const notificationsRouter = new Router();

notificationsRouter
  .get('/users/:id/notifications', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .put('/notifications/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  });

module.exports = notificationsRouter;
