'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const { error } = require('console');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
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

server.listen(port);
server.on('error' , onError);
server.on('listening' , onListening);
console.log('API rodando na porta ' + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0 ){
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syncall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE' :
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }


}
