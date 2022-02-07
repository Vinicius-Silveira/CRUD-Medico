import { IMedico } from './../types/IMedico';
import { Request, Response } from 'express'
import Medico from '../models/medico'

const getMedico = async (req: Request, res: Response): Promise<void> => {
    try {
        const medicos: IMedico[] = await Medico.find()
        res.status(200).json({ medicos })

    } catch (e) {
        console.log(e)
        throw e
    }
}

const addMedico = async (req: Request, res: Response): Promise<void> => {
    try {
        const corpo = req.body as Pick<IMedico, "nome" | "crm" | "especialidade" | "convenios" | "cpf">
        const medico: IMedico = new Medico({
            nome: corpo.nome,
            crm: corpo.crm,
            especialidade: corpo.especialidade,
            convenios: corpo.convenios,
            cpf: corpo.cpf
        })
        const novoMedico = await medico.save()
        res.status(200).json({ novoMedico })

    } catch (e) {
        console.log(e)
        throw e
    }
}

const removeMedico = async (req: Request, res: Response): Promise<void> => {
    try {
        const medicoRemovido = await Medico.findByIdAndRemove(req.params.id)
        res.status(200).json({ medicoRemovido })

    } catch (e) {
        console.log(e)
        throw e
    }
}

const updateMedico = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req

        const medicoAtualizado: IMedico | null =
            await Medico.findByIdAndUpdate({ _id: id }, body, { new: true })
        res.status(200).json({ medicoAtualizado })

    } catch (e) {
        console.log(e)
        throw e
    }
}
export { getMedico, addMedico, removeMedico, updateMedico }