import slugify from "slugify";
import { prisma } from "./prismaClient_model";

export const TagModel = {
    async create(data: {
        nome: string;
        slug?: string;
    }) {
        const nome = data.nome.trim();
        const slug = data.slug ?? slugify(data.nome, { lower: true, strict: true })

        return await prisma.tag.create({
            data: {
                nome,
                slug,
            },
        });
    },

    async getById(id: string) {
        return await prisma.tag.findUnique({
            where: { id },
            include: {
                PostTag: true,
            },
        });
    },

    async getBySlug(slug: string) {
        return await prisma.tag.findUnique({
            where: { slug },
            include: {
                PostTag: true,
            },
        });
    },

    async listAll() {
        return await prisma.tag.findMany({
            include: {
                PostTag: true,
            },
        });
    },

    async update(id: string, data: { nome?: string; slug?: string }) {
        const updateData: any = {};

        if (data.nome) {
            updateData.nome = data.nome.trim();
            updateData.slug = slugify(data.nome, { lower: true, strict: true })
        }

        if (data.slug) {
            updateData.slug = data.slug;
        }

        return await prisma.tag.update({
            where: { id },
            data: updateData,
        });
    },

    async delete(id: string) {
        return await prisma.tag.delete({
            where: { id },
        });
    }
}