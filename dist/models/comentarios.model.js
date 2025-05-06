"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentariosModel = void 0;
const prismaClient_model_1 = require("./prismaClient.model");
exports.ComentariosModel = {
    async create(data) {
        return await prismaClient_model_1.prisma.comentarios.create({ data });
    },
    async getById(id) {
        return await prismaClient_model_1.prisma.comentarios.findUnique({
            where: { id },
            include: {
                post: true,
                autor: true
            },
        });
    },
    async listAll() {
        return await prismaClient_model_1.prisma.comentarios.findMany({
            include: {
                post: true,
                autor: true,
            },
        });
    },
    async update(id, data) {
        return await prismaClient_model_1.prisma.comentarios.update({
            where: { id },
            data,
        });
    },
    async delete(id) {
        return await prismaClient_model_1.prisma.comentarios.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=comentarios.model.js.map