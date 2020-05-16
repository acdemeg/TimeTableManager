import { actionsEnum, scenesEnum, messages } from '../constants';
import appServiceData from '../App/appServiceData';

const TIME_TABLES_LOADED = newTimeTables => ({
  type: actionsEnum.TIME_TABLES_LOADED,
  payload: newTimeTables,
});

const TIME_TABLES_REQUESTED = () => ({
  type: actionsEnum.TIME_TABLES_REQUESTED,
});

const TIME_TABLES_ERROR = error => ({
  type: actionsEnum.TIME_TABLES_ERROR,
  payload: error,
});

const ORDERS_LOADED = newOrders => ({
  type: actionsEnum.ORDERS_LOADED,
  payload: newOrders,
});

const PROFILE_ERROR = error => ({
  type: actionsEnum.PROFILE_ERROR,
  payload: error,
});

const PROFILE_LOADED = profile => ({
  type: actionsEnum.PROFILE_LOADED,
  payload: profile,
});

const ORDERS_REQUESTED = () => ({
  type: actionsEnum.ORDERS_REQUESTED,
});

const ORDERS_ERROR = error => ({
  type: actionsEnum.ORDERS_ERROR,
  payload: error,
});

const SHOW_ALERT = (scene, text, typeAlert = 'info') => ({
  type: actionsEnum.SHOW_ALERT,
  payload: { scene, text, typeAlert },
});

const HIDE_ALERT = () => ({
  type: actionsEnum.HIDE_ALERT,
});

const OPEN_MODAL_PROFILE = (type, title) => ({
  type: actionsEnum.OPEN_MODAL_PROFILE,
  payload: { type, title },
});

const CANCEL_MODAL_PROFILE = () => ({
  type: actionsEnum.CANCEL_MODAL_PROFILE,
});

const SUBMIT_MODAL_PROFILE = data => ({
  type: actionsEnum.SUBMIT_MODAL_PROFILE,
  payload: data,
});

const OPEN_MODAL_ORDERS = (type, title) => ({
  type: actionsEnum.OPEN_MODAL_ORDERS,
  payload: { type, title },
});

const CANCEL_MODAL_ORDERS = () => ({
  type: actionsEnum.CANCEL_MODAL_ORDERS,
});

const SUBMIT_MODAL_ORDERS = data => ({
  type: actionsEnum.SUBMIT_MODAL_ORDERS,
  payload: data,
});

const REJECT_MODAL_ORDERS = () => ({
  type: actionsEnum.REJECT_MODAL_ORDERS,
});

const LOG_IN = userId => ({
  type: actionsEnum.LOG_IN,
  payload: userId,
});

const LOG_OUT = () => ({
  type: actionsEnum.LOG_OUT,
});

const LOGIN = (event, dispatch) => {
  event.preventDefault();

  const formDate = new FormData(document.getElementById('LogInForm'));

  const userRegData = {
    email: formDate.get('email'),
    password: formDate.get('password'),
  };

  appServiceData.logInUser(userRegData).then(user => {
    if (user) {
      dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_IN));
      dispatch(LOG_IN(user.id));
      dispatch(PROFILE_LOADED(user));
    } else {
      dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_IN_ERROR, 'error'));
    }
  });
};

const REGISTER = (event, dispatch) => {
  event.preventDefault();
  const formDate = new FormData(document.getElementById('RegForm'));
  const user = {
    name: formDate.get('name'),
    email: formDate.get('email'),
    password: formDate.get('password'),
  };

  appServiceData.regUser(user).then(res => {
    if (res) {
      dispatch(SHOW_ALERT(scenesEnum.REG, messages.REG));
    } else dispatch(SHOW_ALERT(scenesEnum.REG, messages.REG_ERROR, 'error'));
  });
};

const fetchTimeTables = dispatch => () => {
  dispatch(TIME_TABLES_REQUESTED());
  appServiceData
    .getTimeTables()
    .then(data => dispatch(TIME_TABLES_LOADED(data)))
    .catch(err => dispatch(TIME_TABLES_ERROR(err)));
};

const fetchOrders = (dispatch, userId) => {
  dispatch(ORDERS_REQUESTED());
  appServiceData
    .getOrdersOfUser(userId)
    .then(data => dispatch(ORDERS_LOADED(data)))
    .catch(err => dispatch(ORDERS_ERROR(err)));
};

const MAKE_ORDER = userId => {
  const order = {
    userId,
  };

  appServiceData.createOrder(order).then(() => {});

  return {
    type: actionsEnum.MAKE_ORDER,
  };
};

const UPDATE_ORDER = (id, newStatus, dispatch, userId) => {
  appServiceData.updateOrder(id, newStatus).then(() => {
    dispatch(ORDERS_REQUESTED());
    appServiceData
      .getOrdersOfUser(userId)
      .then(data => dispatch(ORDERS_LOADED(data)))
      .catch(err => dispatch(ORDERS_ERROR(err)));
  });
};

export {
  fetchTimeTables,
  fetchOrders,
  SHOW_ALERT,
  HIDE_ALERT,
  OPEN_MODAL_PROFILE,
  CANCEL_MODAL_PROFILE,
  SUBMIT_MODAL_PROFILE,
  OPEN_MODAL_ORDERS,
  CANCEL_MODAL_ORDERS,
  SUBMIT_MODAL_ORDERS,
  REJECT_MODAL_ORDERS,
  PROFILE_ERROR,
  MAKE_ORDER,
  UPDATE_ORDER,
  LOG_IN,
  LOG_OUT,
  REGISTER,
  LOGIN,
};
