'use strict';

const schedulesApi = require('./api/schedules');
const usersApi = require('./api/users');
const urlKeyMap = new Map([
  ["/{param}/users", '/{adminId}/users'],
  ["/schedules/{param}", '/schedules/{scheduleId}'],
  ["/reservations/{param}", '/reservations/{scheduleId}'],
  ["/{param}/users/{param}/reservations", '/{adminId}/users/{userId}/reservations'],
  ["/user/reserve/{param}/{param}", '/user/reserve/{scheduleId}/{numberSlot}'],
]);

const routerMap = new Map();

routerMap.set(`GET:/schedules`, schedulesApi.getSchedules);
routerMap.set(`GET:/{adminId}/users`, usersApi.getUsers);
routerMap.set(`GET:/schedules/{scheduleId}`, schedulesApi.getSchedulesById);
routerMap.set(`GET:/reservations/{scheduleId}`, schedulesApi.getReservationsByScheduleId);
routerMap.set(`GET:/{adminId}/users/{userId}/reservations`, schedulesApi.getReservationsOfUser);
routerMap.set(`POST:/schedules`, schedulesApi.addNewSchedule);
routerMap.set(`POST:/user/login`, usersApi.userLogIn);
routerMap.set(`POST:/user/reserve/{scheduleId}/{numberSlot}`, schedulesApi.reserveOfSlot);
routerMap.set(`POST:/user/reg`, usersApi.regNewUser);

module.exports.routerMap = routerMap;
module.exports.urlKeyMap = urlKeyMap;
