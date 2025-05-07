"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTagController = void 0;
const postTag_model_1 = require("../models/postTag.model");
exports.PostTagController = {
    async create(req, res) {
        try {
            const { postId, tagId } = req.body;
            const postTag = await postTag_model_1.PostTagModel.create({ postId, tagId });
            res.success(postTag, "PostTag criado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao criar postTag", 500);
        }
    },
    async getById(req, res) {
        try {
            const { id } = req.params;
            const postTag = await postTag_model_1.PostTagModel.getById(id);
            res.success(postTag, "PostTag encontrado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar postTag", 500);
        }
    },
    async listAll(req, res) {
        try {
            const postTags = await postTag_model_1.PostTagModel.listAll();
            res.success(postTags, "PostTags encontrados com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar postTags", 500);
        }
    },
    async deletePostTag(req, res) {
        try {
            const { id } = req.params;
            await postTag_model_1.PostTagModel.deletePostTag(id);
            res.success(null, "PostTag deletado com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar postTag", 500);
        }
    },
    async deleteTagsFromPost(req, res) {
        try {
            const { postId } = req.params;
            await postTag_model_1.PostTagModel.deleteTagsFromPost(postId);
            res.success(null, "Tags deletadas do post com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar tags do post", 500);
        }
    },
    async deletePostsFromTags(req, res) {
        try {
            const { tagId } = req.params;
            await postTag_model_1.PostTagModel.deletePostsFromTags(tagId);
            res.success(null, "Posts deletados das tags com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar posts das tags", 500);
        }
    }
};
//# sourceMappingURL=postTag.controller.js.map