import updateTimeTables from './reducers/timeTables';
import updateAlert from './reducers/notifications';
import updateProfile from './reducers/profile';
import updateOrdersList from './reducers/orders';
import checkUserAuthorization from './reducers/authorization';

const reducer = (state, action) => ({
  timeTablesList: updateTimeTables(state, action),
  notifications: updateAlert(state, action),
  profile: updateProfile(state, action),
  orderList: updateOrdersList(state, action),
  authorization: checkUserAuthorization(state, action),
});

export default reducer;
