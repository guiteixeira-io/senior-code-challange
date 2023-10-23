'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/get-token', controller.get);
router.post('/cadastro', controller.post);
router.get('/cadastro/:codigo', controller.get);
router.get('/cadastro/', controller.getAll);

router.get('/', (req, res, next) => {
    res.status(200).send({
        tittle: "Code Challenge API DEV4",
        version: "1.0.0"
    });
});

module.exports = router;