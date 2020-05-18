const Router = require('koa-router');
const { users, orders, notifications } = require('@root/api');
// const { auth, isAdmin } = require('@root/passport');

const usersRouter = new Router();

usersRouter
  .get('/', async ctx => {
    ctx.body = await users.getUsers();
  })
  .get(
    '/profile',
    /* auth, */ async ctx => {
      ctx.body = await users.getProfile();
    },
  )
  .post('/login', async (ctx, next) => {
    // await users.logIn(ctx, next);
    ctx.body = await users.logIn(ctx, next);
  })
  .get(
    '/logout',
    /* auth, */ async ctx => {
      ctx.body.response = await users.logOut(ctx);
    },
  )
  .post('/register', async ctx => {
    ctx.body = await users.register(ctx);
  })
  .get(
    '/:id',
    /* auth, isAdmin */ async ctx => {
      /**
     * 
     * При запросе происходит Internal Server Error
     * 
     * Контейнер выдает следующий лог:
     *
     * web_1      | Executing (default): SELECT "id", "sess" FROM "Sessions" AS "Session" WHERE "Session"."id" = '24ef7814-4407-4b6f-b714-60c8de16b6f1';
      web_1      | Executing (default): SELECT "id", "name", "email", "password", "role" FROM "Users" AS "User" WHERE "User"."id" = 1;
      web_1      | Executing (default): SELECT "id", "orderId", "type", "isRead", "userId" FROM "Notifications" AS "Notification" WHERE "Notification"."userId" = '2';
      web_1      | Executing (default): INSERT INTO "Sessions" ("id","sess") VALUES ($1,$2) RETURNING *;
      web_1      | 
      web_1      |   SequelizeUniqueConstraintError: Validation error
      web_1      |       at Query.formatError (/home/node/app/node_modules/sequelize/lib/dialects/postgres/query.js:324:18)
      web_1      |       at /home/node/app/node_modules/sequelize/lib/dialects/postgres/query.js:72:18

     * т.е. почему-то проиходит запрос на повторную установку сесссии с тем же ключом 
     * 
     * если убрать isAdmin то выдает Nof Found из за того что ответ отправляется раньше чем получены 
     * данные из БД, хотя вроде везде await ??????
     * 
     *  web_1      | [2020-05-17T05:29:49.741Z] INFO (398 on 16ded9ec18e5): request completed
        web_1      |     req: {
        web_1      |       "id": 2,
        web_1      |       "method": "GET",
        web_1      |       "url": "/users/3",
        web_1      |       "headers": {
        web_1      |         "user-agent": "PostmanRuntime/7.24.1",
        web_1      |         "accept": "/",
        web_1      |         "cache-control": "no-cache",
        web_1      |         "postman-token": "4b713343-a6b9-4adc-9b4f-ab2e93197f6a",
        web_1      |         "host": "localhost",
        web_1      |         "accept-encoding": "gzip, deflate, br",
        web_1      |         "connection": "keep-alive",
        web_1      |         "cookie": "koa.sess=7ea87e42-bb88-419a-bee8-cbb0d69b88aa; koa.sess.sig=TMntNOqykUBDgDiZWXbKeIUcQ54"
        web_1      |       },
        web_1      |       "remoteAddress": "::ffff:172.18.0.1",
        web_1      |       "remotePort": 60614
        web_1      |     }
        web_1      |     res: {
        web_1      |       "statusCode": 404,
        web_1      |       "headers": {
        web_1      |         "content-type": "text/plain; charset=utf-8",
        web_1      |         "content-length": "9"
        web_1      |       }
        web_1      |     }
        web_1      |     responseTime: 5
        web_1      | Executing (default): SELECT "id", "name", "email", "password", "role" FROM "Users" AS "User" WHERE "User"."id" = '3';

     * 
     * 
     * 
     * */
      ctx.body = await users.getProfileById(ctx.params.id);
    },
  )
  .put(
    '/:id',
    /* auth, */ async ctx => {
      ctx.body = await users.updateProfileById(ctx.params.id, ctx.request.body);
    },
  )
  .delete(
    '/:id',
    /* auth, idAdmin */ async ctx => {
      ctx.body = await users.deleteProfileById(ctx.params.id);
    },
  )
  .get(
    '/:id/orders',
    /* auth, */ async ctx => {
      ctx.body = await orders.getOrdersListByUserId(ctx.params.id);
    },
  )
  .get(
    '/:id/notifications',
    /* auth, */ async ctx => {
      ctx.body = await notifications.getNotificationsForUserById(ctx.params.id);
    },
  );

module.exports = usersRouter;
