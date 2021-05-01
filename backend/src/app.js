'use strict';

require('dotenv').config();
require('module-alias/register');
const path = require('path');
const Koa = require('koa');
const send = require('koa-send');
const serve = require('koa-static');
const koaBody = require('koa-body');
const pino = require('koa-pino-logger');
const err = require('./error');
const rootRouter = require('./routes/main-router');
// const { passport } = require('./passport');
const session = require('koa-session');
const { Session } = require('@root/models');

/**
 *
 *  Есть Вопрос в user-router
 *  и в api/timetables.js
 *
 *
 */

const logger = pino({ prettyPrint: true });

const staticDir = path.resolve(__dirname, '..', '..', 'public');
const app = new Koa();
app.keys = ['secret'];

const storeSession = {
  async get(key) {
    const session = await Session.findOne({
      where: {
        id: key,
      },
      raw: true,
    });
    if (!session) return null;
    return JSON.parse(session.sess);
  },

  async set(key, sess) {
    const session = JSON.stringify(sess);
    await Session.create(
      {
        id: key,
        sess: session,
      },
      { raw: true },
    ).then(() => console.log('session saved'));
  },

  async destroy(key) {
    await Session.destroy({ where: { sid: key }, row: true }).then(() =>
      console.log('session destroy'),
    );
  },
};

const CONFIG = {
  key: 'koa.sess',
  maxAge: 36000,
  httpOnly: true,
  renew: true,
  store: storeSession,
};

app.use(serve(staticDir));
app.use(koaBody());
app.use(session(CONFIG, app));
app.use(logger);
// app.use(passport.initialize());
// app.use(passport.session());
app.use(rootRouter.routes());
app.use(err);

// Default route
app.use(async function(ctx) {
  await send(ctx, 'index.html', { root: staticDir });
});

app.listen(3000, () => {
  console.log('Server listen on localhost:3000');
});
