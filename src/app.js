'use strict'

const express = require('express');

const app = express();
const router = express.Router();

const route = router.get('/', (red, res, next) => {
    res.status(200).send({
        tittle: "Node Store API",
        version: "0.0.1"
    });
});

const auth = '45720513809:45720513809';


route.get('/consulta', (req, res) => {
    http.get({
       url: 'http://168.138.231.9:10666/get-token', username:'45720513809', password:'45720513809'
    },(error,res,body) => {
        console.log(body);
    });
    
});

app.use('/', route);

module.exports = app;