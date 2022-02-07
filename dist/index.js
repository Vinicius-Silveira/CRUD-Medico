"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const index_1 = require("./routes/index");
const servidor = express();
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));
servidor.use(index_1.default);
const porta = 3003;
const urlDB = "mongodb://localhost:27017";
mongoose
    .connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
    servidor.listen(porta, () => {
        console.log(`servidor rodando na porta ${porta}`);
    });
})
    .catch(error => {
    throw error;
});
