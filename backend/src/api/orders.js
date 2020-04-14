// const HttpStatus = require('http-status-codes');
// const { Order } = require('@root/models');

const orders = {
  // getOrdersOfUser: async id => {
  //   if (!id) return JSON.stringify([]);
  //   // for each order need get good list
  //   return await Order.findAll({
  //     include: [{ model: Product }],
  //     where: { userId: id },
  //   });
  // },
  // updateOrderStatus: async (id, obj) => {
  //   const order = await orders.getOrder(id);
  //   order.status = obj.status === 'Cancel' ? 'Canceled' : 'Done';
  //   await order.save();
  //   return 'succses updateOrderStatus';
  // },
  // getOrder: async orderId => {
  //   return await Order.findOne({ where: { id: orderId } });
  // },
  // createOrder: async order => {
  //   return await Order.create({
  //     authorId: order.authorId,
  //     total: order.total,
  //   })
  //     .then(orderRecord => {
  //       order.products.forEach(element => {
  //         element.orderId = orderRecord.id;
  //       });
  //       ProductsInOrder.bulkCreate(order.products);
  //     })
  //     .then(() => 'succses createOrder')
  //     .catch(() => 'createOrder error');
  // },
};

module.exports = orders;
