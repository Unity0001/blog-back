import slugify from "slugify";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const TagModel = {
    async createTag(data: {
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

    async getTagById(id: string) {
        return await prisma.tag.findUnique({
            where: { id },
            include: {
                PostTag: true,
            },
        });
    },

    async getTagBySlug(slug: string) {
        return await prisma.tag.findUnique({
            where: { slug },
            include: {
                PostTag: true,
            },
        });
    },

    async getAllTags() {
        return await prisma.tag.findMany({
            include: {
                PostTag: true,
            },
        });
    },

    async updateTag(id: string, data: { nome?: string; slug?: string }) {
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

    async deleteTag(id: string) {
        return await prisma.tag.delete({
            where: { id },
        });
    }
}