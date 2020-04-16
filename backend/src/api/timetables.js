const { TimeTable } = require('@root/models');

const timeTables = {
  addTimeTable: async timeTable => {
    return await TimeTable.create({
      title: timeTable.title,
      startDate: timeTable.startDate,
      endDate: timeTable.endDate,
      slotSize: timeTable.slotSize,
      attributeRequire: timeTable.attributeRequire,
    }).catch(err => `can't add TimeTable ${err}`);
  },
  getTimeTables: async () => {
    return await TimeTable.findAll().catch(err => `can't get TimeTables ${err}`);
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
