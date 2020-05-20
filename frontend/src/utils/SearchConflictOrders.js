import { orderStatusEnum } from '../constants';

const searchConflictOrders = orders => {
  const conflictOrders = new Set();

  orders.forEach(curOrder => {
    const conflictOrder = orders.find(order => {
      if (curOrder.id !== order.id) {
        if (curOrder.startDate === order.startDate) {
          if (
            curOrder.status !== orderStatusEnum.CANCELED ||
            order.status !== orderStatusEnum.CANCELED
          ) {
            return order;
          }
          return null;
        }
        return null;
      }
      return null;
    });
    if (conflictOrder) {
      conflictOrders.add(conflictOrder);
    }
    return null;
  });

  return Array.from(conflictOrders);
};

export default searchConflictOrders;
