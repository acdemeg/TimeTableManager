const Router = require('koa-router');
const { users } = require('@root/api');
const usersRouter = new Router();

usersRouter
  .get('/users', async ctx => {
    ctx.body = await users.getUsers();
  })
  .get('/users/profile', async ctx => {
    ctx.body = await users.getProfile();
  })
  .post('/users/login', async ctx => {
    ctx.body = await users.logIn(ctx.request.body);
  })
  .post('/users/register', async ctx => {
    ctx.body = await users.register(ctx.request.body);
  })
  .get('/users/:id', async ctx => {
    ctx.body = await users.getProfileById(ctx.params.id);
  })
  .put('/users/:id', async ctx => {
    ctx.body = await users.updateProfileById(ctx.params.id, ctx.request.body);
  })
  .delete('/users/:id', async ctx => {
    ctx.body = await users.deleteProfileById(ctx.params.id);
  })
  .get('/users/:id/orders', async ctx => {
    ctx.body = await users.getReservationsListByUserId(ctx.params.id);
  });

module.exports = usersRouter;
