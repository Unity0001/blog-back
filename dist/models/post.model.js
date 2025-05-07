"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const slugify_1 = __importDefault(require("slugify"));
const prismaClient_model_1 = require("./prismaClient.model");
exports.PostModel = {
    async create(data) {
        const titulo = data.titulo.trim();
        const slug = data.slug ?? (0, slugify_1.default)(data.titulo, { lower: true, strict: true });
        return await prismaClient_model_1.prisma.post.create({
            data: {
                titulo,
                slug,
                conteudo: data.conteudo,
                autorId: data.autorId,
                categoriaId: data.categoriaId,
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