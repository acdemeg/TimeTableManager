import updateTimeTables from './reducers/timeTables';
import updateAlert from './reducers/notifications';
import updateProfile from './reducers/profile';
import updateOrders from './reducers/orders';
import checkUserAuthorization from './reducers/authorization';

const reducer = (state, action) => ({
  timeTablesList: updateTimeTables(state, action),
  notifications: updateAlert(state, action),
  profile: updateProfile(state, action),
  orders: updateOrders(state, action),
  authorization: checkUserAuthorization(state, action),
});

export default reducer;
