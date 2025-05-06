import { prisma } from "./prismaClient.model";

export const PostModel = {
    async create(data: {
        titulo: string;
        slug: string;
        conteudo: string;
        autorId: string;
        categoriaId: string;
        status?: string;
        publishedAt?: Date;
    }) {
        return await prisma.post.create({
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

    async getById(id: string) {
        return await prisma.post.findUnique({
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
        return await prisma.post.findMany({
            include: {
                autor: true,
                categoria: true,
            },
        });
    },

    async update(id: string, data: Partial<{
        titulo: string;
        slug: string;
        conteudo: string;
        categoriaId: string;
        status: string;
        publishedAt: Date | null;
    }>) {
        return await prisma.post.update({
            where: { id },
            data,
        });
    },

    async delete(id: string) {
        return await prisma.post.delete({
            where: { id },
        });
    },
};
