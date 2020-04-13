const Router = require('koa-router');

const timetablesRouter = new Router();

timetablesRouter
  .post('/timetables', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .get('/timetables', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .get('/timetables/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .put('/timetables/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  })
  .delete('/timetables/:id', async ctx => {
    ctx.body = 'await products.getAll();';
  });

module.exports = timetablesRouter;
