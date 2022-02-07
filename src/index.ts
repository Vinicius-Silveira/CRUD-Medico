import * as express from 'express'
import * as bodyParser from 'body-parser'

import mongoose = require("mongoose")

import rotas from './routes/index'

const servidor: express.Application = express()
servidor.use(express.json())
servidor.use(express.urlencoded({ extended: false }))
servidor.use(rotas)

const porta = 3003
const urlDB: string = "mongodb://localhost:27017"

mongoose
    .connect(urlDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        servidor.listen(porta, () => {
            console.log(`servidor rodando na porta ${porta}`)
        })
    })
    .catch(error => {
        throw error
    })