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

const OPEN_MODAL_WINDOW = (type, title) => ({
  type: actionsEnum.OPEN_MODAL_WINDOW,
  payload: { type, title },
});

const CANCEL_MODAL_WINDOW = () => ({
  type: actionsEnum.CANCEL_MODAL_WINDOW,
});

const SUBMIT_MODAL_WINDOW = data => ({
  type: actionsEnum.SUBMIT_MODAL_WINDOW,
  payload: data,
});

const LOG_IN = userId => ({
  type: actionsEnum.LOG_IN,
  payload: userId,
});

const LOG_OUT = () => ({
  type: actionsEnum.LOG_OUT,
});

const fetchProfile = (dispatch, userId) => {
  console.log('fetchProfile', userId);
  appServiceData
    .getProfileOfUser(userId)
    .then(data => dispatch(PROFILE_LOADED(data)))
    .catch(err => dispatch(PROFILE_ERROR(err)));
};

const LOGIN = (event, dispatch) => {
  event.preventDefault();

  const formDate = new FormData(document.getElementById('LogInForm'));

  const user = {
    email: formDate.get('email'),
    password: formDate.get('password'),
  };

  appServiceData.logInUser(user).then(res => {
    console.log('LOGIN ACTION', res);
    if (res) {
      dispatch(SHOW_ALERT(scenesEnum.LOG_IN, messages.LOG_IN));
      dispatch(LOG_IN(res));
      fetchProfile(dispatch, res);
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

  console.log('REGISTER ACTION', user);

  appServiceData.regUser(user).then(res => {
    console.log('REGISTER ACTION');
    console.log(res);

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
  console.log('fetchOrders', userId);
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
  fetchProfile,
  SHOW_ALERT,
  HIDE_ALERT,
  OPEN_MODAL_WINDOW,
  CANCEL_MODAL_WINDOW,
  SUBMIT_MODAL_WINDOW,
  MAKE_ORDER,
  UPDATE_ORDER,
  LOG_IN,
  LOG_OUT,
  REGISTER,
  LOGIN,
};
