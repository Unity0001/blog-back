import { prisma } from "./prismaClient.model";

export const ComentariosModel = {
  async create(data: {
    postId: string;
    autorId: string;
    texto: string;
    createdAt: Date;
  }) {
    return await prisma.comentarios.create({ data })
  },

  async getById(id: string) {
    return await prisma.comentarios.findUnique({
      where: { id },
      include: {
        post: true,
        autor: true
      },
    });
  },

  async listAll() {
    return await prisma.comentarios.findMany({
      include: {
        post: true,
        autor: true,
      },
    });
  },

  async update(id: string, data: Partial<{
    postId: string;
    texto: string;
    createdAt: Date;
  }>) {
    return await prisma.comentarios.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.comentarios.delete({
      where: { id },
    });
  },

}