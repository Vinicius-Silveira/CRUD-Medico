"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicoController_1 = require("../controller/medicoController");
const router = express_1.Router();
router.get('/vinicius-medicos', medicoController_1.getMedico);
router.post('/vinicius-add-medico', medicoController_1.addMedico);
router.delete('/vinicius-remove-medico/:id', medicoController_1.removeMedico);
router.post('/vinicius-atualiza-medico/:id', medicoController_1.updateMedico);
exports.default = router;