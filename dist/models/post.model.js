"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const prismaClient_model_1 = require("./prismaClient.model");
exports.PostModel = {
    async create(data) {
        return await prismaClient_model_1.prisma.post.create({
            data: {
                titulo: data.titulo,
                slug: data.slug,
                conteudo: data.conteudo,
                autorId: data.autorId,
                categoriaId: data.categoriaId,
                status: data.status ?? 'rascunho',
                publishedAt: data.publishedAt,
            },
        });
    },
    async getById(id) {
        return await prismaClient_model_1.prisma.post.findUnique({
            where: { id },
            include: {
                autor: true,
                categoria: true,
                PostTag: {
                    include: {
                        tag: true,
                    },
                },
                comentarios: {
                    include: {
                        autor: true,
                    },
                },
            },
        });
    },
    async listAll() {
        return await prismaClient_model_1.prisma.post.findMany({
            include: {
                autor: true,
                categoria: true,
            },
        });
    },
    async update(id, data) {
        return await prismaClient_model_1.prisma.post.update({
            where: { id },
            data,
        });
    },
    async delete(id) {
        return await prismaClient_model_1.prisma.post.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=post.model.js.map