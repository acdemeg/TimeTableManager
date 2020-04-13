'use strict';

const Sequelize = require('sequelize');
const config = require('@root/config/config.json');
const pino = require('pino');
const logger = pino({ prettyPrint: true });

const db = new Sequelize(config[process.env.NODE_ENV].url, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.authenticate()
  .then(() => {
    logger.info('Connection has been established successfully.');
  })
  .catch(err => {
    logger.error(`Unable to connect to the database:,  ${err}`);
  });

module.exports = db;
