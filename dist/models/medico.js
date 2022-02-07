"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const medicoSchema = new mongoose_1.Schema({
    nome: {
        type: String,
        required: true
    },
    crm: {
        type: String,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    },
    convenios: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.model("Medico", medicoSchema);
