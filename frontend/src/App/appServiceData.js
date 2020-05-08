import axios from 'axios';

const apiBase = `${window.location.protocol}//${window.location.host}/`;

const appServiceData = {
  async getTimeTables() {
    const res = await axios.get(`${apiBase}timetables`);
    return res.data;
  },

  async getOrdersOfUser(id) {
    if (!id) return [];

    const res = await axios.get(`${apiBase}orders/${id}`);
    console.log('getOrdersOfUser', id);
    console.log(res.data);
    return res.data;
  },

  async getProfileOfUser(id) {
    if (!id) return {};

    const res = await axios.get(`${apiBase}users/${id}`);
    console.log('getOrdersOfUser', id);
    console.log(res.data);
    return res.data;
  },

  async createOrder(order) {
    const res = await axios.post(`${apiBase}orders`, JSON.stringify(order));

    console.log('createOrder');
    console.log(res);
  },

  async updateOrder(id, newStatus) {
    const res = await axios.patch(`${apiBase}orders/${id}`, JSON.stringify({ status: newStatus }));

    console.log(`updateOrder ${id}`);
    console.log(newStatus);
    console.log(res);
  },

  async regUser(user) {
    const res = { data: 'succses registration' }; // await axios.post(`${apiBase}users/register`, JSON.stringify(user));
    console.log(`regUser${user}`);
    console.log(res);
    return res.data === 'succses registration';
  },

  async logInUser(user) {
    const res = { status: 200 }; // await axios.post(`${apiBase}users/login`, JSON.stringify(user));
    // res.data.userId;
    console.log(`logInUser${user}`);
    console.log(res);
    return res.status === 200 ? 1 : false;
  },
};

export default appServiceData;
