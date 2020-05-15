const Router = require('koa-router');
const { users, orders, notifications } = require('@root/api');
const { auth, isAdmin } = require('@root/passport');

const usersRouter = new Router();

usersRouter
  .get('/', async ctx => {
    ctx.body = await users.getUsers();
  })
  .get('/profile', auth, async ctx => {
    ctx.body = await users.getProfile();
  })
  .post('/login', async (ctx, next) => {
    await users.logIn(ctx, next);
  })
  .get('/logout', auth, async ctx => {
    await users.logOut(ctx);
  })
  .post('/register', async ctx => {
    ctx.body = await users.register(ctx);
  })
  .get('/:id', auth, isAdmin, async ctx => {
    ctx.body = await users.getProfileById(ctx.params.id);
  })
  .put('/:id', auth, async ctx => {
    ctx.body = await users.updateProfileById(ctx.params.id, ctx.request.body);
  })
  .delete('/:id', auth, isAdmin, async ctx => {
    ctx.body = await users.deleteProfileById(ctx.params.id);
  })
  .get('/:id/orders', auth, async ctx => {
    ctx.body = await orders.getOrdersListByUserId(ctx.params.id);
  })
  .get('/:id/notifications', auth, async ctx => {
    ctx.body = await notifications.getNotificationsForUserById(ctx.params.id);
  });

module.exports = usersRouter;
