"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const prismaClient_model_1 = require("./prismaClient.model");
exports.UserModel = {
    async create(data) {
        let nomeDeUsuarioParaCriar = data.nomeDeUsuario;
        if (!nomeDeUsuarioParaCriar) {
            const primeiroNome = data.nomeCompleto.split(' ')[0];
            nomeDeUsuarioParaCriar = primeiroNome;
        }
        return await prismaClient_model_1.prisma.user.create({
            data: {
                nomeDeUsuario: nomeDeUsuarioParaCriar,
                senha: data.senha,
                email: data.email,
                nomeCompleto: data.nomeCompleto,
            }
        });
    },
    async getById(id) {
        return await prismaClient_model_1.prisma.user.findUnique({
            where: { id },
            include: {
                posts: true,
                comentarios: true,
            },
        });
    },
    async getByUsername(nomeDeUsuario) {
        return await prismaClient_model_1.prisma.user.findUnique({
            where: { nomeDeUsuario },
        });
    },
    async findAll() {
        return await prismaClient_model_1.prisma.user.findMany({
            select: {
                id: true,
                nomeDeUsuario: true,
                email: true,
                nomeCompleto: true,
                dataRegistro: true,
            },
        });
    },
    async findByEmail(email) {
        return await prismaClient_model_1.prisma.user.findUnique({
            where: { email },
        });
    },
    async update(id, data) {
        return await prismaClient_model_1.prisma.user.update({
            where: { id },
            data,
        });
    },
    async delete(id) {
        return await prismaClient_model_1.prisma.user.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=user.model.js.map