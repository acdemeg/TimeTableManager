const Router = require('koa-router');
const { orders } = require('@root/api');
const ordersRouter = new Router();

ordersRouter
  .post('/orders', async ctx => {
    ctx.body = await orders.createOrder(ctx.request.body);
  })
  .get('/orders', async ctx => {
    // add parametrs post = ?:
    ctx.body = await orders.searchInfoAboutOrders();
  })
  .get('/orders/:id', async ctx => {
    ctx.body = await orders.getOrdersInfoById(ctx.params.id);
  })
  .put('/orders/:id', async ctx => {
    ctx.body = await orders.updateOrderById(ctx.params.id, ctx.request.body);
  })
  .delete('/orders/:id', async ctx => {
    ctx.body = await orders.deleteOrderById(ctx.params.id);
  });

module.exports = ordersRouter;
