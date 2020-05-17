const { TimeTable, Order } = require('@root/models');
const attributesAPI = require('./attributes');

const timeTables = {
  addTimeTable: async timeTable => {
    return await TimeTable.create(
      {
        title: timeTable.title,
        startDate: timeTable.startDate,
        endDate: timeTable.endDate,
        slotSize: timeTable.slotSize,
      },
      { raw: true },
    ).catch(err => `can't add TimeTable ${err}`);
  },
  getTimeTables: async timeTablesIds => {
    let timeTablesAll;

    if (timeTablesIds) {
      timeTablesAll = await TimeTable.findAll({ where: { id: timeTablesIds } }).catch(
        err => `can't get TimeTables ${err}`,
      );
    } else {
      timeTablesAll = await TimeTable.findAll().catch(err => `can't get TimeTables ${err}`);
    }

    if (timeTablesAll) {
      const orders = await timeTables.getOrdersForTimeTables(
        timeTablesAll.map(timeTable => timeTable.id),
      );
      const attributeValues = await attributesAPI.getAttributesForOrders(
        orders.map(order => order.id),
      );

      return timeTablesAll.map(timeTable => {
        return {
          id: timeTable.id,
          title: timeTable.title,
          startDate: timeTable.startDate,
          endDate: timeTable.endDate,
          slotSize: timeTable.slotSize,
          orders: orders
            .filter(order => order.timeTableId === timeTable.id)
            .map(order => {
              return {
                id: order.id,
                authorId: order.authorId,
                authorName: order.authorName,
                startDate: order.startDate,
                endDate: order.endDate,
                status: order.status,
                timeTableId: order.timeTableId,
                attributeValues: attributeValues.filter(value => value.orderId === order.id),
              };
            }),
        };
      });
    }
    return [];
  },
  getTimeTableById: async timeTableId => {
    const timeTable = await TimeTable.findOne({ where: { id: timeTableId } }).catch(
      err => `can't find TimeTable with id = ${timeTableId} ${err}`,
    );
    if (timeTable) {
      const orders = await timeTables.getOrdersForTimeTables(timeTable.id);
      const attributeValues = await attributesAPI.getAttributesForOrders(
        orders.map(order => order.id),
      );
      return {
        timeTable: timeTable,
        orders: orders,
        attributeValues,
      };
    }
    return `timeTable with id = ${timeTableId} doesn't exist`;
  },
  updateTimeTableById: async (timeTableId, obj) => {
    return await TimeTable.update({ title: obj.title }, { where: { id: timeTableId } }).catch(
      err => `can't update timeTable status ${err}`,
    );
  },
  deleteTimeTableById: async timeTableId => {
    return await TimeTable.destroy({
      where: {
        id: timeTableId,
      },
    })
      .then(res =>
        res ? 'succses delete timeTable' : `timeTable with id = ${timeTableId} doesn't exist`,
      )
      .catch(err => `reject delete timeTable ${err}`);
  },
  getOrdersForTimeTables: async timeTableIds => {
    const timeTablesIds = Array.isArray(timeTableIds) ? timeTableIds : [timeTableIds];
    const orders = await Order.findAll({ where: { timeTableId: timeTablesIds } }).catch(
      err => `can't get orders ${err}`,
    );
    return orders;
  },
};

module.exports = timeTables;
