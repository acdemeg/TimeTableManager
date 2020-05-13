'use strict';

require('dotenv').config();
require('module-alias/register');
const path = require('path');
const Koa = require('koa');
const send = require('koa-send');
const serve = require('koa-static');
const session = require('koa-session');
const koaBody = require('koa-body');
const pino = require('koa-pino-logger');
const err = require('./error');
const rootRouter = require('./routes/main-router');

const logger = pino({ prettyPrint: true });

const staticDir = path.resolve(__dirname, '..', '..', 'public');
const app = new Koa();
app.keys = [' secret key '];

app.use(logger);
app.use(
  session(
    {
      key: 'sessionId',
    },
    app,
  ),
);
/*
  Can pass options.store object how {
  db witch get, set, destroy methods
}
*/

app.use(serve(staticDir));
app.use(koaBody());
app.use(rootRouter.routes());
app.use(err);

// Default route
app.use(async function(ctx) {
  await send(ctx, 'index.html', { root: staticDir });
});

app.listen(3000, () => {
  console.log('Server listen on localhost:3000');
});
