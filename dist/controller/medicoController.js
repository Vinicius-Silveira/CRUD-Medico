"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMedico = exports.removeMedico = exports.addMedico = exports.getMedico = void 0;
const medico_1 = require("../models/medico");
const getMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicos = yield medico_1.default.find();
        res.status(200).json({ medicos });
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});
exports.getMedico = getMedico;
const addMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const corpo = req.body;
        const medico = new medico_1.default({
            nome: corpo.nome,
            crm: corpo.crm,
            especialidade: corpo.especialidade,
            convenios: corpo.convenios,
            cpf: corpo.cpf
        });
        const novoMedico = yield medico.save();
        res.status(200).json({ novoMedico });
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});
exports.addMedico = addMedico;
const removeMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicoRemovido = yield medico_1.default.findByIdAndRemove(req.params.id);
        res.status(200).json({ medicoRemovido });
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});
exports.removeMedico = removeMedico;
const updateMedico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const medicoAtualizado = yield medico_1.default.findByIdAndUpdate({ _id: id }, body, { new: true });
        res.status(200).json({ medicoAtualizado });
    }
    catch (e) {
        console.log(e);
        throw e;
    }
});
exports.updateMedico = updateMedico;
