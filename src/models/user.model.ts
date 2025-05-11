import { prisma } from "./prismaClient.model";

export const UserModel = {

    async create(data: {
        nomeDeUsuario: string;
        senha: string;
        email: string;
        nomeCompleto: string;
    }) {
        let nomeDeUsuarioParaCriar = data.nomeDeUsuario;
        if (!nomeDeUsuarioParaCriar) {
            const primeiroNome = data.nomeCompleto.split(' ')[0]; 
            nomeDeUsuarioParaCriar = primeiroNome;
        }

        return await prisma.user.create({
            data: {
                nomeDeUsuario: nomeDeUsuarioParaCriar, 
                senha: data.senha,
                email: data.email,
                nomeCompleto: data.nomeCompleto,
            }
        });
    },

    async getById(id: string) {
        return await prisma.user.findUnique({
            where: { id },
            include: {
                posts: true,
                comentarios: true,
            },
        });
    },

    async getByUsername(nomeDeUsuario: string) {
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

    async findByEmail(email: string) {
        return await prisma.user.findUnique({
            where: { email },
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
