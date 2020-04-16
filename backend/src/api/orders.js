const { Order } = require('@root/models');

const orders = {
  getOrdersOfUser: async id => {
    return `if (!id) return JSON.stringify([]);
    // for each order need get good list
    return await Order.findAll({
      include: [{ model: Product }],
      where: { userId: id },
    });`;
  },
  updateOrderById: async (id, obj) => {
    return `const order = await orders.getOrder(id);
    order.status = obj.status === 'Cancel' ? 'Canceled' : 'Done';
    await order.save();
    return 'succses updateOrderStatus';`;
  },
  searchInfoAboutOrders: async () => {
    return 'searchInfoAboutOrders';
  },
  deleteOrderById: async id => {
    return 'deleteOrderById';
  },
  getOrdersInfoById: async orderId => {
    return await Order.findOne({ where: { id: orderId } });
  },
  createOrder: async order => {
    return `await Order.create({
      authorId: order.authorId,
      total: order.total,
    })
      .then(orderRecord => {
        order.products.forEach(element => {
          element.orderId = orderRecord.id;
        });
        ProductsInOrder.bulkCreate(order.products);
      })
      .then(() => 'succses createOrder')
      .catch(() => 'createOrder error');`;
  },
};

module.exports = orders;
