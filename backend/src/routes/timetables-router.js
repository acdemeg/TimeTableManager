const Router = require('koa-router');
const { timeTables } = require('@root/api');
const timetablesRouter = new Router();

timetablesRouter
  .post('/', async ctx => {
    ctx.body = await timeTables.addTimeTable(ctx.request.body);
  })
  .get('/', async ctx => {
    ctx.body = await timeTables.getTimeTables();
  })
  .get('/:id', async ctx => {
    ctx.body = await timeTables.getTimeTableById(ctx.params.id);
  })
  .put('/:id', async ctx => {
    ctx.body = await timeTables.updateTimeTableById(ctx.params.id, ctx.request.body);
  })
  .delete('/:id', async ctx => {
    ctx.body = await timeTables.deleteTimeTableById(ctx.params.id);
  });

module.exports = timetablesRouter;
