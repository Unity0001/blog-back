import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const CategoriaModel = {
    async createCategoria(data: {
        nome: string;
        slug: string;
    }) {
        return await prisma.categoria.create({ data });
    },

    async getCategoriaById(id: string) {
        return await prisma.categoria.findUnique({
            where: { id },
            include: {
                posts: true,
            },
        });
    },

    async getCategoriaBySlug(slug: string) {
        return await prisma.categoria.findUnique({
            where: { slug },
            include: { posts: true },
        });
    },

    async listAllCategorias() {
        return await prisma.categoria.findMany({
            include: { posts: true },
        });
    },

    async updateCategoria(id: string, data: Partial<{
        nome: string;
        slug: string;
    }>) {
        return await prisma.categoria.update({
            where: { id },
            data,
        });
    },

    async deleteCategoria(id: string) {
        return await prisma.categoria.delete({
            where: { id },
        })
    }
}