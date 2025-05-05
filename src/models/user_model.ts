import { prisma } from "./prismaClient_model";

export const UserModel = {

    async create(data: {
        nomeDeUsuario: string;
        senha: string;
        email: string;
        nomeCompleto: string;
    }) {
        return await prisma.user.create({ data });
    },

    async findById(id: string) {
        return await prisma.user.findUnique({
            where: { id },
            include: {
                posts: true,
                comentarios: true,
            },
        });
    },

    async findByUsername(nomeDeUsuario: string) {
        return await prisma.user.findUnique({
            where: { nomeDeUsuario },
        });
    },

    async findAll() {
        return await prisma.user.findMany({
            select: {
                id: true,
                nomeDeUsuario: true,
                email: true,
                nomeCompleto: true,
                dataRegistro: true,
            },
        });
    },

    async update(id: string, data: Partial<{
        nomeDeUsuario: string;
        senha: string;
        email: string;
        nomeCompleto: string;
    }>) {
        return await prisma.user.update({
            where: { id },
            data,
        });
    },

    async delete(id: string) {
        return await prisma.user.delete({
            where: { id },
        });
    },
};
