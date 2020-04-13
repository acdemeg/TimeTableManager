const Router = require('koa-router');

const ordersRouter = new Router();

ordersRouter
  .post('/orders', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .get('/orders', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .get('/orders/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .put('/orders/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .delete('/orders/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  });

module.exports = ordersRouter;
