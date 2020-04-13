const Router = require('koa-router');
const { User } = require('@root/models');

const usersRouter = new Router();

usersRouter
  .get('/users', async ctx => {
    ctx.cookies.set('user', 'admin');
    ctx.body = 'await users.getAll();';
  })
  .get('/users/profile', async ctx => {
    ctx.body = 'await users.getProfile();';
  })
  .post('/users/login', async ctx => {
    ctx.body = 'await users.logIn();';
  })
  .post('/users/register', async ctx => {
    ctx.body = 'await users.register();';
  })
  .get('/users/:id', async ctx => {
    ctx.body = await User.findOne({ where: { id: 1 } });
    // "await users.getProfileById();"
  })
  .put('/users/:id', async ctx => {
    ctx.body = 'await users.updateProfileById();';
  })
  .delete('/users/:id', async ctx => {
    ctx.body = 'await users.deleteProfileById();';
  })
  .get('/users/:id/orders', async ctx => {
    ctx.body = 'await users.getReservationsListByUserId();';
  });

module.exports = usersRouter;
