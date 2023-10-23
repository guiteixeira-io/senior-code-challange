const axios = require('axios');

const url = 'http://168.138.231.9:10666/cadastro';

const postCadaster = (options) => {
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

  module.exports = postCadaster;