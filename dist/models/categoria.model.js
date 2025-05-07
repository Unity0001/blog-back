"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaModel = void 0;
const slugify_1 = __importDefault(require("slugify"));
const prismaClient_model_1 = require("./prismaClient.model");
exports.CategoriaModel = {
    async create(data) {
        const nome = data.nome.trim();
        const slug = data.slug ?? (0, slugify_1.default)(data.nome, { lower: true, strict: true });
        return await prismaClient_model_1.prisma.categoria.create({ data: { nome, slug } });
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