import axios from 'axios';

const appServiceData = {
  async getTimeTables() {
    const res = await axios.get(`/timetables`);
    return res.data;
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
    const res = await axios.post(`/orders`, JSON.stringify(order));
    return res;
  },

  async updateOrder(id, newStatus) {
    const res = await axios.patch(`/orders/${id}`, JSON.stringify({ status: newStatus }));
    return res;
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
