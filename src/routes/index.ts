import { Router } from 'express'
import { getMedico, addMedico, updateMedico, removeMedico } from '../controller/medicoController'

const router: Router = Router()

router.get('/vinicius-medicos', getMedico)
router.post('/vinicius-add-medico', addMedico)
router.delete('/vinicius-remove-medico/:id', removeMedico)
router.post('/vinicius-atualiza-medico/:id', updateMedico)

export default router