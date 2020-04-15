'use strict';
const { DataTypes } = require('sequelize');
const db = require('@root/db');

exports.User = require('./user');
exports.TimeTable = require('./timetable');
exports.Order = require('./order');
exports.EmailPasswordMap = require('./email_password_map')(db, DataTypes);
exports.Notification = require('./notification');
