import { actionsEnum } from '../../constants';

const updateOrdersList = (state, action) => {
  if (state === undefined) {
    return {
      orders: [],
      loading: false,
      error: null,
    };
  }

  switch (action.type) {
    case actionsEnum.ORDERS_REQUESTED:
      return {
        orders: [],
        loading: true,
        error: null,
      };

    case actionsEnum.ORDERS_LOADED:
      return {
        orders: action.payload,
        loading: false,
        error: null,
      };

    case actionsEnum.ORDERS_ERROR:
      return {
        orders: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.orderList;
  }
};

export default updateOrdersList;
