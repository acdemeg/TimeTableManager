const Router = require('koa-router');
const { orders } = require('@root/api');
const ordersRouter = new Router();

ordersRouter
  .post('/', async ctx => {
    ctx.body = await orders.createOrder(ctx.request.body);
  })
  .get('/', async ctx => {
    ctx.body = await orders.searchInfoAboutOrders(ctx.request.query);
  })
  .get('/:id', async ctx => {
    ctx.body = await orders.getOrdersInfoById(ctx.params.id);
  })
  .put('/:id', async ctx => {
    ctx.body = await orders.updateOrderById(ctx.params.id, ctx.request.body);
  })
  .delete('/:id', async ctx => {
    ctx.body = await orders.deleteOrderById(ctx.params.id);
  });

module.exports = ordersRouter;
