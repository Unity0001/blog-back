import { prisma } from "./prismaClient_model";

export const CategoriaModel = {
    async create(data: {
        nome: string;
        slug: string;
    }) {
        return await prisma.categoria.create({ data });
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