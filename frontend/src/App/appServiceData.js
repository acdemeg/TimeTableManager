import axios from 'axios';

const appServiceData = {
  async getTimeTables() {
    const res = await axios.get(`/timetables`);
    return res.data;
  },

  async createTimeTable(timeTable) {
    const res = await axios.post(`/timetables`, timeTable);
    return res.data === 'success';
  },

  async getOrdersOfUser(id) {
    if (!id) return [];
    const res = await axios.get(`/orders/${id}`);
    return res.data;
  },

  async getProfileOfUser(id) {
    if (!id) return {};
    const res = await axios.get(`/users/${id}`);
    return res.data;
  },

  async createOrder(order) {
    const res = await axios.post(`/orders`, order);
    return res.data === 'success';
  },

  async updateOrder(id, newStatus) {
    const res = await axios.patch(`/orders/${id}`, { status: newStatus });
    return res.data === 'success';
  },

  async regUser(user) {
    const res = await axios.post(`/users/register`, user).catch(err => `${err}`);
    return res.data === 'succses registration';
  },

  async logInUser(user) {
    const res = await axios.post(`/users/login`, user).catch(err => {
      return `${err}`;
    });
    return res.data === 'wrong email or password' ? false : res.data;
  },
};

export default appServiceData;
