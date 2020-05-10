const actionsEnum = Object.freeze({
  TIME_TABLES_LOADED: 'FETCH_TIME_TABLES_SUCCESS',
  TIME_TABLES_REQUESTED: 'FETCH_TIME_TABLES_REQUESTED',
  TIME_TABLES_ERROR: 'FETCH_TIME_TABLES_FAILURE',
  PROFILE_LOADED: 'FETCH_PROFILE_SUCCESS',
  PROFILE_ERROR: 'FETCH_PROFILE_FAILURE',
  ORDERS_ERROR: 'FETCH_ORDERS_FAILURE',
  ORDERS_LOADED: 'FETCH_ORDERS_SUCCESS',
  ORDERS_REQUESTED: 'FETCH_ORDERS_REQUESTED',
  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_ALERT: 'HIDE_ALERT',
  OPEN_MODAL_PROFILE: 'OPEN_MODAL_PROFILE',
  CANCEL_MODAL_PROFILE: 'CANCEL_MODAL_PROFILE',
  SUBMIT_MODAL_PROFILE: 'SUBMIT_MODAL_PROFILE',
  OPEN_MODAL_ORDERS: 'OPEN_MODAL_ORDERS',
  CANCEL_MODAL_ORDERS: 'CANCEL_MODAL_ORDERS',
  SUBMIT_MODAL_ORDERS: 'SUBMIT_MODAL_ORDERS',
  REJECT_MODAL_ORDERS: 'REJECT_MODAL_ORDERS',
  MAKE_ORDER: 'MAKE_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
});

const scenesEnum = Object.freeze({
  PROFILE: 'Profile',
  TIME_TABLES: 'Timetables',
  TIME_TABLE: 'Timetable',
  TIMELINE: 'Timeline',
  LOG_IN: 'Log-In',
  REG: 'Reg',
});

const typeModalEnum = Object.freeze({
  NAME: 'name_redact',
  EMAIL: 'email_redact',
  CREATE_ORDER: 'CREATE_ORDER',
  INFO_ORDER: 'INFO_ORDER',
  ACCEPT_ORDER: 'ACCEPT_ORDER',
  REJECT_ORDER: 'REJECT_ORDER',
});

const timeTableTypeEnum = Object.freeze({
  HOUR: 'HOUR',
  DAY: 'DAY',
  WEEK: 'WEEK',
});

const messages = Object.freeze({
  MAKE_ORDER: 'You make to order',
  EMAIL_UPDATE: 'Your email updated',
  FAIL_UPDATE: 'Occured Error!',
  NAME_UPDATE: 'Your name updated',
  LOG_IN: 'You logged your account',
  LOG_OUT: 'You logout your account',
  LOG_IN_ERROR: 'Incorrect email or password',
  REG: 'You succses registered',
  REG_ERROR: 'Registraton failed',
  ORDER_ADDED: 'You order had added',
  ORDER_ACCEPTED: 'You accetp this order',
  ORDER_REJECTED: 'You reject this order',
});

export { actionsEnum, scenesEnum, timeTableTypeEnum, typeModalEnum, messages };
