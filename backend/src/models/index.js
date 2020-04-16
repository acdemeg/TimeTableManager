'use strict';

const { DataTypes } = require('sequelize');
const db = require('@root/db');

exports.User = require('./user')(db, DataTypes);
exports.TimeTable = require('./timetable')(db, DataTypes);
exports.Order = require('./order')(db, DataTypes);
exports.EmailPasswordMap = require('./email_password_map')(db, DataTypes);
exports.Notification = require('./notification')(db, DataTypes);
