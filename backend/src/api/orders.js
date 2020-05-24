const { Order, AttributeValue } = require('@root/models');
const timeTablesAPI = require('./timetables');
const attributesAPI = require('./attributes');

const orders = {
  updateOrderById: async (orderId, obj) => {
    const res = await Order.update({ status: obj.status }, { where: { id: orderId } }).catch(
      err => `can't update order status ${err}`,
    );
    if (res) {
      return 'success';
    }
    return 'error';
  },
  deleteOrderById: async orderId => {
    const res = await Order.destroy({
      where: {
        id: orderId,
      },
    })
      .then(res => (res ? 'succses delete order' : `order with id = ${orderId} doesn't exist`))
      .catch(err => `reject delete order ${err}`);

    if (res) {
      return 'success';
    }
    return 'error';
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
  getOrdersInfoById: async orderId => {
    const order = await Order.findOne({ where: { id: orderId } }).catch(
      err => `can't get order ${err}`,
    );
    if (order) {
      const attributeValues = await attributesAPI.getAttributesForOrders(orderId);
      return {
        id: order.id,
        authorId: order.authorId,
        authorName: order.authorName,
        startDate: order.startDate,
        endDate: order.endDate,
        status: order.status,
        timeTableId: order.timeTableId,
        attributeValues: attributeValues,
      };
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

    if (orderRecord.id && attributes) {
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
