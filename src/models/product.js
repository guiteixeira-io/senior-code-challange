'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const now = new Date();

const schema = new Schema({
    codigo: {
        type: Number,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },    
    email: {
        type: String,
        required: true
    },
    data_nascimento: {
        type: Date,
        required: true
    },
    data_criacao: {
        type: Date,
        required: true,
        default: now
    }
});

module.exports = mongoose.model('Product', schema);