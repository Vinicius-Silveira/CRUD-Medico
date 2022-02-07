import { IMedico } from './../types/IMedico';
import { model, Schema } from 'mongoose'

const medicoSchema: Schema = new Schema({
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
})
export default model<IMedico>("Medico", medicoSchema)