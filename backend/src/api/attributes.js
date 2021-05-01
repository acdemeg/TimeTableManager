const { AttributeValue } = require('@root/models');

const attributes = {
  getAttributesForOrders: async orderIds => {
    const ordersIds = Array.isArray(orderIds) ? orderIds : [orderIds];
    const attributesArr = await AttributeValue.findAll({ where: { orderId: ordersIds } }).catch(
      err => `can't get attributes ${err}`,
    );
    return attributesArr;
  },
};

module.exports = attributes;
