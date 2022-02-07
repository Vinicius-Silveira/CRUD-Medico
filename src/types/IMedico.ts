import { Document } from 'mongoose'

export interface IMedico extends Document {
    nome: String
    crm: String
    especialidade: String
    convenios: String
    cpf: String
}