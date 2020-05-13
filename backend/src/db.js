'use strict';

const Sequelize = require('sequelize');
const config = require('@root/config/config.json');

const db = new Sequelize(config[process.env.NODE_ENV].url, {
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
