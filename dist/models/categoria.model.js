"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaModel = void 0;
const prismaClient_model_1 = require("./prismaClient.model");
exports.CategoriaModel = {
    async create(data) {
        return await prismaClient_model_1.prisma.categoria.create({ data });
    },
    async getById(id) {
        return await prismaClient_model_1.prisma.categoria.findUnique({
            where: { id },
            include: {
                posts: true,
            },
        });
    },
    async getBySlug(slug) {
        return await prismaClient_model_1.prisma.categoria.findUnique({
            where: { slug },
            include: { posts: true },
        });
    },
    async listAll() {
        return await prismaClient_model_1.prisma.categoria.findMany({
            include: { posts: true },
        });
    },
    async update(id, data) {
        return await prismaClient_model_1.prisma.categoria.update({
            where: { id },
            data,
        });
    },
    async delete(id) {
        return await prismaClient_model_1.prisma.categoria.delete({
            where: { id },
        });
    }
};
//# sourceMappingURL=categoria.model.js.map