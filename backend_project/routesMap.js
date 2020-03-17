'use strict';
const schedulesApi = require('./schedules');

const routerMap = new Map();

routerMap.set(`GET:/schedules`, schedulesApi.getSchedules);
routerMap.set(`GET:/schedules/{param}`, schedulesApi.getSchedulesById);
routerMap.set(`GET:/reservations/{param}`, schedulesApi.getReservationsByScheduleId);
routerMap.set(`GET:/users/{param}/reservations`, schedulesApi.getReservationsOfUser);
routerMap.set(`POST:/schedules`, schedulesApi.addNewSchedule);
routerMap.set(`POST:/user/reserve/{param}/{param}`, schedulesApi.reserveOfSlot);

module.exports = routerMap;
