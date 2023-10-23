'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const getToken = require('../routes/authentication');
const apiService = require('../routes/api-service');
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

exports.get = (req, response, next) => {
    getToken().then(token => {
        const getOptions = {
            method: 'get',
            url: `http://168.138.231.9:10666/cadastro/${req.params.codigo}`,
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        }
        apiService(getOptions).then(resApi => {
            console.log('resApi' , resApi)
            Product
                .find({
                    codigo: req.params.codigo
                })
                .then(data => {
                    console.log('data' , data)
                    const person = {
                        nome: data[0].nome,
                        data_nascimento: data[0].data_nascimento,
                        email: resApi[0].email,
                        data_criacao: resApi[0].data_criacao
                    }
                    response.status(200).send(person);
                }).catch(e => {
                    response.status(400).send(e);
                });
        })
    })
}

exports.post = (req, response, next) => {
    getToken().then(token => {
        console.log('authentication', token)
        const postOptions = {
            method: 'post',
            url,
            data: req.body,
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        }
        apiService(postOptions).then(res => {
            console.log('Retorno do cadastro', res)
            const getOptions = {
                method: 'get',
                url: 'http://168.138.231.9:10666/cadastro/',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            }
            apiService(getOptions).then(res => {
                const codigo = res[res.length - 1].codigo
                req.body.codigo = codigo
                console.log('Retorno da consulta', res)
                console.log('Codigo', codigo)
                console.log('body', req.body)
                var product = new Product(req.body);
                product
                    .save()
                    .then(x => {
                        response.status(200).send({
                            message: 'Cadastrado com sucesso!'
                        });
                    }).catch(e => {
                        response.status(400).send({
                            message: 'Falha ao cadastrar!',
                            data: e
                        });
                    });
            })
        })

    })


};