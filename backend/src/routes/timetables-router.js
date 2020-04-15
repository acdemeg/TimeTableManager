const Router = require('koa-router');
const { timeTables } = require('@root/api');
const timetablesRouter = new Router();

timetablesRouter
  .post('/timetables', async ctx => {
    ctx.body = await timeTables.addTimeTable(ctx.request.body);
  })
  .get('/timetables', async ctx => {
    ctx.body = await timeTables.getTimeTables();
  })
  .get('/timetables/:id', async ctx => {
    ctx.body = await timeTables.getTimeTableById(ctx.params.id);
  })
  .put('/timetables/:id', async ctx => {
    ctx.body = await timeTables.updateTimeTableById(ctx.params.id, ctx.request.body);
  })
  .delete('/timetables/:id', async ctx => {
    ctx.body = await timeTables.deleteTimeTableById(ctx.params.id);
  });

module.exports = timetablesRouter;
