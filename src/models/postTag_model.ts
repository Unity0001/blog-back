import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const PostTag = {
    async createPostTag(data: {
        postId: string;
        tagId: string;
    }) {
        return await prisma.postTag.create({ data })
    },

    async getPostTagById(id: string) {
        return await prisma.postTag.findUnique({
            where: { id },
            include: {
                post: true,
                tag: true,
            },
        });
    },

    async listAllPostTag() {
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

