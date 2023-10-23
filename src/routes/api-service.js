const axios = require('axios');

const apiService = (options) => {
console.log('options' , options)
  return axios(options)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    } else {       
      console.log(`Erro: ${response.status}`);
    }
  })
  .catch((error) => {
    console.log(`Erro: ${error.message}`);
  });
}

  module.exports = apiService;