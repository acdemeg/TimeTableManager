const { Order, AttributeValue } = require('@root/models');
const timeTablesAPI = require('./timetables');
const attributesAPI = require('./attributes');

const orders = {
  updateOrderById: async (orderId, obj) => {
    return await Order.update({ status: obj.status }, { where: { id: orderId } }).catch(
      err => `can't update order status ${err}`,
    );
  },
  searchInfoAboutOrders: async queryString => {
    if (queryString.userId) {
      const userId = Number(queryString.userId);
      if (!isNaN(userId)) {
        return await orders.getOrdersListByUserId(userId);
      }
      return 'UserId must be number';
    }

    if (queryString.timeTablesIds) {
      const timeTablesIds = queryString.timeTablesIds
        .slice(1, -1)
        .split(',')
        .map(id => Number(id));
      return await timeTablesAPI.getTimeTables(timeTablesIds);
    }

    return [];
  },
  deleteOrderById: async orderId => {
    return await Order.destroy({
      where: {
        id: orderId,
      },
    })
      .then(res => (res ? 'succses delete order' : `order with id = ${orderId} doesn't exist`))
      .catch(err => `reject delete order ${err}`);
  },
  getOrdersInfoById: async orderId => {
    const order = await Order.findOne({ where: { id: orderId } }).catch(
      err => `can't get order ${err}`,
    );
    if (order) {
      return await attributesAPI.getAttributesForOrders(order);
    }
    return `order with id = ${orderId} doesn't exist`;
  },
  createOrder: async order => {
    const orderRecord = await Order.create({
      authorId: order.authorId,
      authorName: order.authorName,
      startDate: order.startDate,
      endDate: order.endDate,
      timeTableId: order.timeTableId,
    }).catch(err => `create Order Error ${err}`);

    order.attributeValues.forEach(attribute => {
      attribute.orderId = orderRecord.id;
    });

    const attributes = await AttributeValue.bulkCreate(order.attributeValues).catch(
      err => `Add attributes Error: ${err}`,
    );

    if (orderRecord.id && attributes[0].id) {
      return 'success';
    } else return 'error';
  },
  getOrdersListByUserId: async userId => {
    const ordersArr = await Order.findAll({ where: { authorId: userId } }).catch(
      err => `can't get orders ${err}`,
    );
    if (ordersArr.length) {
      const attributesArr = await attributesAPI.getAttributesForOrders(
        ordersArr.map(order => order.id),
      );
      return {
        orders: ordersArr,
        attributeValues: attributesArr,
      };
    }
    return `User with id = ${userId} haven't exist orders`;
  },
};

module.exports = orders;
