"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_model_1 = require("../models/post.model");
exports.PostController = {
    async create(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { titulo, conteudo, categoriaId, slug } = req.body;
            const post = await post_model_1.PostModel.create({
                titulo: titulo,
                conteudo: conteudo,
                autorId: req.user?.id,
                categoriaId: categoriaId,
                slug: slug,
                publishedAt: new Date(),
            });
            res.success(post, "Post criado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao criar post", 500);
        }
    },
    async getById(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const post = await post_model_1.PostModel.getById(id);
            res.success(post, "Post encontrado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar post", 500);
        }
    },
    async listAll(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const posts = await post_model_1.PostModel.listAll();
            res.success(posts, "Posts encontrados com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar posts", 500);
        }
    },
    async update(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const { titulo, conteudo, slug } = req.body;
            const post = await post_model_1.PostModel.update(id, { titulo, conteudo, slug });
            res.success(post, "Post atualizado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao atualizar post", 500);
        }
    },
    async delete(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            await post_model_1.PostModel.delete(id);
            res.success(null, "Post deletado com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar post", 500);
        }
    },
};
//# sourceMappingURL=post.controller.js.map