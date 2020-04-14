const Router = require('koa-router');
// const { timeTables } = require('@root/api');
const timetablesRouter = new Router();

timetablesRouter
  .post('/timetables', async ctx => {
    ctx.body = 'await products.getAll(ctx.request.body);';
  })
  .get('/timetables', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .get('/timetables/:id', async ctx => {
    ctx.body = 'await products.getAll(ctx.params.id);';
  })
  .put('/timetables/:id', async ctx => {
    ctx.body = 'await products.getAll(ctx.params.id, ctx.request.body);';
  })
  .delete('/timetables/:id', async ctx => {
    ctx.body = 'await products.getAll(ctx.params.id);';
  });

module.exports = timetablesRouter;
