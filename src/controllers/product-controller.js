'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const getToken = require('../routes/authentication');
const postCadaster = require('../routes/api-cadastro');
const { application } = require('express');

const url = 'http://168.138.231.9:10666/cadastro';

exports.getAll = (req, res, next) => {
    getToken().then(res => {
        console.log('authentication', res)
    })

    Product
        .find()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.get = (req, res, next) => {
    Product
        .find({
            codigo: req.params.codigo
        })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    getToken().then(token => {
        console.log('authentication', token)
        const options = {
            method: 'post',
            url,
            data: req.body,
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        }
        postCadaster(options).then(res => {
            console.log('Retorno do cadastro', res)
        })
        
    })
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(200).send({
                message: 'Cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar!',
                data: e
            });
        });

};