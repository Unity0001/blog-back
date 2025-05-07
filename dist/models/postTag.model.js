"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTagModel = void 0;
const prismaClient_model_1 = require("./prismaClient.model");
exports.PostTagModel = {
    async create(data) {
        return await prismaClient_model_1.prisma.postTag.create({ data });
    },
    async getById(id) {
        return await prismaClient_model_1.prisma.postTag.findUnique({
            where: { id },
            include: {
                post: true,
                tag: true,
            },
        });
    },
    async listAll() {
        return await prismaClient_model_1.prisma.postTag.findMany({
            include: {
                post: true,
                tag: true,
            },
        });
    },
    async deletePostTag(id) {
        return await prismaClient_model_1.prisma.postTag.delete({
            where: { id }
        });
    },
    async deleteTagsFromPost(postId) {
        return await prismaClient_model_1.prisma.postTag.deleteMany({
            where: { postId }
        });
    },
    async deletePostsFromTags(tagId) {
        return await prismaClient_model_1.prisma.postTag.deleteMany({
            where: { tagId },
        });
    },
};
//# sourceMappingURL=postTag.model.js.map