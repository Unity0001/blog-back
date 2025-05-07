"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const prismaClient_model_1 = require("./prismaClient.model");
exports.UserModel = {
    async create(data) {
        return await prismaClient_model_1.prisma.user.create({ data });
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