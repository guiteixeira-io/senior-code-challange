'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://root:FZHu86Yu1y63fHp7@cluster-inicial.vuhvv7c.mongodb.net/?retryWrites=true&w=majority')

//CArrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;

//const auth = '45720513809:45720513809';


// route.get('/consulta', (req, res) => {
//     http.get({
//         url: 'http://168.138.231.9:10666/get-token', username: '45720513809', password: '45720513809'
//     }, (error, res, body) => {
//         console.log(body);
//     });

// });