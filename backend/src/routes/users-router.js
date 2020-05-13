const Router = require('koa-router');
const { users, orders, notifications } = require('@root/api');

const usersRouter = new Router();

usersRouter
  .get('/', async ctx => {
    ctx.body = await users.getUsers();
  })
  .get('/profile', async ctx => {
    ctx.body = await users.getProfile();
  })
  .post('/login', async ctx => {
    ctx.body = await users.logIn(ctx.request.body);
  })
  .post('/register', async ctx => {
    ctx.body = await users.register(ctx.request.body);
  })
  .get('/:id', async ctx => {
    ctx.body = await users.getProfileById(ctx.params.id);
  })
  .put('/:id', async ctx => {
    ctx.body = await users.updateProfileById(ctx.params.id, ctx.request.body);
  })
  .delete('/:id', async ctx => {
    ctx.body = await users.deleteProfileById(ctx.params.id);
  })
  .get('/:id/orders', async ctx => {
    ctx.body = await orders.getOrdersListByUserId(ctx.params.id);
  })
  .get('/:id/notifications', async ctx => {
    ctx.body = await notifications.getNotificationsForUserById(ctx.params.id);
  });

module.exports = usersRouter;
