import slugify from "slugify";
import { prisma } from "./prismaClient.model";

export const CategoriaModel = {
    async create(data: {
        nome: string;
        slug: string;
    }) {
        const nome = data.nome.trim();
        const slug = data.slug ?? slugify(data.nome, { lower: true, strict: true })
        return await prisma.categoria.create({ data: { nome, slug } });
    },

    async getById(id: string) {
        return await prisma.categoria.findUnique({
            where: { id },
            include: {
                posts: true,
            },
        });
    },

    async getBySlug(slug: string) {
        return await prisma.categoria.findUnique({
            where: { slug },
            include: { posts: true },
        });
    },

    async listAll() {
        return await prisma.categoria.findMany({
            include: { posts: true },
        });
    },

    async update(id: string, data: Partial<{
        nome: string;
        slug: string;
    }>) {
        return await prisma.categoria.update({
            where: { id },
            data,
        });
    },

    async delete(id: string) {
        return await prisma.categoria.delete({
            where: { id },
        })
    }
}