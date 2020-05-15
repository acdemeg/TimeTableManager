'use strict';

const { DataTypes } = require('sequelize');
const db = require('@root/db');

exports.User = require('./user')(db, DataTypes);
exports.TimeTable = require('./timetable')(db, DataTypes);
exports.Order = require('./order')(db, DataTypes);
exports.Notification = require('./notification')(db, DataTypes);
exports.AttributeValue = require('./attributevalue')(db, DataTypes);
exports.Attribute = require('./attribute')(db, DataTypes);
exports.Session = require('./session')(db, DataTypes);
