const axios = require('axios');

const username = '45720513809';
const password = '45720513809';

const url = 'http://168.138.231.9:10666/get-token';

const headers = {
  Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
};

const options = {
  method: 'GET',
  url,
  headers,
};

const getToken = () => {
  return axios(options)
  .then((response) => {
    if (response.status === 200) {
      return response.data.token;
      token = response.data.token;
      console.log(`Token: ${token}`);
    } else {
      console.log(`Erro: ${response.status}`);
    }
  })
  .catch((error) => {
    console.log(`Erro: ${error.message}`);
  });
}

  module.exports = getToken;