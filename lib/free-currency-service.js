require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://free.currconv.com/api/v7',
  params: {
    apiKey: process.env.CURRENCY_CONVERTOR_API_KEY
  },
  timeout: +process.env.TIMEOUT || 5000,
});

module.exports = {
  convertCurrency: async (from, to) => {
    const response = await api.get(`/convert?q=${from}_${to}&compact=y`);
    const key = Object.keys(response.data)[0];
    const { val } = response.data[key];
    return { rate: val };
  },
};