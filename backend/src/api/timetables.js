// const HttpStatus = require('http-status-codes');
const { TimeTable } = require('@root/models');

const timeTables = {
  addTimeTable: async timeTable => {
    return 'addTimeTable';
  },
  getTimeTables: async () => {
    return 'getTimeTables';
  },
  getTimeTableById: async timeTableId => {
    return await TimeTable.findOne({ where: { id: timeTableId } });
  },
  updateTimeTableById: async (id, obj) => {
    return 'updateTimeTableById';
  },
  deleteTimeTableById: async id => {
    return 'deleteTimeTableById';
  },
};

module.exports = timeTables;
