'use strict';

const schedulesApi = require('./api/schedules');
const usersApi = require('./api/users');

const routerMap = new Map();

routerMap.set(`GET:/schedules`, schedulesApi.getSchedules);
routerMap.set(`GET:/{param}/users`, usersApi.getUsers);
routerMap.set(`GET:/schedules/{param}`, schedulesApi.getSchedulesById);
routerMap.set(`GET:/reservations/{param}`, schedulesApi.getReservationsByScheduleId);
routerMap.set(`GET:/{param}/users/{param}/reservations`, schedulesApi.getReservationsOfUser);
routerMap.set(`POST:/schedules`, schedulesApi.addNewSchedule);
routerMap.set(`POST:/user/login`, usersApi.userLogIn);
routerMap.set(`POST:/user/reserve/{param}/{param}`, schedulesApi.reserveOfSlot);
routerMap.set(`POST:/user/reg`, usersApi.regNewUser);

module.exports = routerMap;
