"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagController = void 0;
const tag_model_1 = require("../models/tag.model");
exports.TagController = {
    async create(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { nome, slug } = req.body;
            const tag = await tag_model_1.TagModel.create({ nome, slug });
            res.success(tag, "Tag criada com sucesso!");
        }
        catch (error) {
            res.error("Erro ao criar tag", 500);
        }
    },
    async getById(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const tag = await tag_model_1.TagModel.getById(id);
            res.success(tag, "Tag encontrada com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar tag", 500);
        }
    },
    async getBySlug(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { slug } = req.params;
            const tag = await tag_model_1.TagModel.getBySlug(slug);
            res.success(tag, "Tag encontrada com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar tag", 500);
        }
    },
    async listAll(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const tags = await tag_model_1.TagModel.listAll();
            res.success(tags, "Tags encontradas com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar tags", 500);
        }
    },
    async update(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const { nome, slug } = req.body;
            const tag = await tag_model_1.TagModel.update(id, { nome, slug });
            res.success(tag, "Tag atualizada com sucesso!");
        }
        catch (error) {
            res.error("Erro ao atualizar tag", 500);
        }
    },
    async delete(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            await tag_model_1.TagModel.delete(id);
            res.success(null, "Tag deletada com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar tag", 500);
        }
    }
};
//# sourceMappingURL=tag.controller.js.map