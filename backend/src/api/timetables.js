const { TimeTable, Order, Attribute } = require('@root/models');
const attributesAPI = require('./attributes');

const timeTables = {
  addTimeTable: async timeTable => {
    const timeTableDB = await TimeTable.create(
      {
        title: timeTable.title,
        startDate: timeTable.startDate,
        endDate: timeTable.endDate,
        slotSize: timeTable.slotSize,
      },
      { raw: true },
    ).catch(err => `can't add TimeTable ${err}`);

    timeTable.attributes = timeTable.attributes.map(attribute => {
      return {
        ...attribute,
        timeTableId: timeTableDB.id,
      };
    });

    const attributes = await Attribute.bulkCreate(timeTable.attributes).catch(
      err => `can't add Attributes ${err}`,
    );

    if (timeTableDB.id && attributes[0].id) {
      return 'success';
    } else return 'error';
  },
  getTimeTables: async timeTablesIds => {
    /**
     *
     *  приходтися делать несклько запросов и потом вручную собирать данные т.к.
     *  если испльзовать опцию { include: [ Model1, Model2, ...]} то получается
     *  следующая ошибка:
     *  can't get TimeTables SequelizeEagerLoadingError: Attribute is not associated to TimeTable!
     *  или подобная хотя все отношения моделей прописасны в /models и они связанны внешним ключами...?
     *
     */

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
      const attributes = await timeTables.getAttributes();
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
          attributes: attributes.filter(attribute => attribute.timeTableId === timeTable.id),
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
      const attributes = await timeTables.getAttributes(timeTable.id);
      const attributeValues = await attributesAPI.getAttributesForOrders(
        orders.map(order => order.id),
      );

      return {
        id: timeTable.id,
        title: timeTable.title,
        startDate: timeTable.startDate,
        endDate: timeTable.endDate,
        slotSize: timeTable.slotSize,
        attributes: attributes,
        orders: orders.map(order => {
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
    }
    return `timeTable with id = ${timeTableId} doesn't exist`;
  },
  updateTimeTableById: async (timeTableId, obj) => {
    return await TimeTable.update({ title: obj.title }, { where: { id: timeTableId } }).catch(
      err => `can't update timeTable status ${err}`,
    );
  },
  deleteTimeTableById: async timeTableId => {
    const res = await TimeTable.destroy({
      where: {
        id: timeTableId,
      },
    })
      .then(res =>
        res ? 'succses delete timeTable' : `timeTable with id = ${timeTableId} doesn't exist`,
      )
      .catch(err => `reject delete timeTable ${err}`);

    if (res) {
      return 'success';
    }
    return 'error';
  },
  getOrdersForTimeTables: async timeTableIds => {
    const timeTablesIds = Array.isArray(timeTableIds) ? timeTableIds : [timeTableIds];
    const orders = await Order.findAll({ where: { timeTableId: timeTablesIds } }).catch(
      err => `can't get orders ${err}`,
    );
    return orders;
  },
  getAttributes: async id => {
    if (id) {
      return await Attribute.findAll({ where: { timeTableId: id } }).catch(
        err => `can't get Attributes ${err}`,
      );
    }
    return await Attribute.findAll().catch(err => `can't get Attributes ${err}`);
  },
};

module.exports = timeTables;
