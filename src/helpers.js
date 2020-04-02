const axios = require("axios");
const config = require("./config");

const httpClient = params => {
  return axios.request({
    ...params,
    baseURL: config.BASE_URL
  });
};

module.exports = { httpClient };
