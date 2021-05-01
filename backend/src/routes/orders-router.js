const Router = require('koa-router');
const { orders } = require('@root/api');
const ordersRouter = new Router();
// const { auth } = require('@root/passport');

ordersRouter
  .post(
    '/',
    /* auth, */ async ctx => {
      ctx.body = await orders.createOrder(ctx.request.body);
    },
  )
  .get(
    '/',
    /* auth, */ async ctx => {
      ctx.body = await orders.searchInfoAboutOrders(ctx.request.query);
    },
  )
  .get(
    '/:id',
    /* auth, */ async ctx => {
      ctx.body = await orders.getOrdersInfoById(ctx.params.id);
    },
  )
  .patch(
    '/:id',
    /* auth, */ async ctx => {
      ctx.body = await orders.updateOrderById(ctx.params.id, ctx.request.body);
    },
  )
  .delete(
    '/:id',
    /* auth, */ async ctx => {
      ctx.body = await orders.deleteOrderById(ctx.params.id);
    },
  );

module.exports = ordersRouter;
