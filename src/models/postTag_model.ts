import { prisma } from "./prismaClient_model";

export const PostTag = {
    async create(data: {
        postId: string;
        tagId: string;
    }) {
        return await prisma.postTag.create({ data })
    },

    async getById(id: string) {
        return await prisma.postTag.findUnique({
            where: { id },
            include: {
                post: true,
                tag: true,
            },
        });
    },

    async listAll() {
        return await prisma.postTag.findMany({
            include: {
                post: true,
                tag: true,
            },
        });
    },

    async deletePostTag(id: string) {
        return await prisma.postTag.delete({
            where: { id }
        });
    },

    async deleteTagsFromPost(postId: string) {
        return await prisma.postTag.deleteMany({
            where: { postId }
        });
    },

    async deletePostsFromTags(tagId: string) {
        return await prisma.postTag.deleteMany({
            where: { tagId },
        });
    },
}

