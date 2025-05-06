"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModel = void 0;
const slugify_1 = __importDefault(require("slugify"));
const prismaClient_model_1 = require("./prismaClient.model");
exports.TagModel = {
    async create(data) {
        const nome = data.nome.trim();
        const slug = data.slug ?? (0, slugify_1.default)(data.nome, { lower: true, strict: true });
        return await prismaClient_model_1.prisma.tag.create({
            data: {
                nome,
                slug,
            },
        });
    },
    async getById(id) {
        return await prismaClient_model_1.prisma.tag.findUnique({
            where: { id },
            include: {
                PostTag: true,
            },
        });
    },
    async getBySlug(slug) {
        return await prismaClient_model_1.prisma.tag.findUnique({
            where: { slug },
            include: {
                PostTag: true,
            },
        });
    },
    async listAll() {
        return await prismaClient_model_1.prisma.tag.findMany({
            include: {
                PostTag: true,
            },
        });
    },
    async update(id, data) {
        const updateData = {};
        if (data.nome) {
            updateData.nome = data.nome.trim();
            updateData.slug = (0, slugify_1.default)(data.nome, { lower: true, strict: true });
        }
        if (data.slug) {
            updateData.slug = data.slug;
        }
        return await prismaClient_model_1.prisma.tag.update({
            where: { id },
            data: updateData,
        });
    },
    async delete(id) {
        return await prismaClient_model_1.prisma.tag.delete({
            where: { id },
        });
    }
};
//# sourceMappingURL=tag.model.js.map