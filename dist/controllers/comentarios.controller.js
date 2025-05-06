"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentariosController = void 0;
const comentarios_model_1 = require("../models/comentarios.model");
exports.ComentariosController = {
    async create(req, res) {
        try {
            const { postId, texto, autorId } = req.body;
            const comentario = await comentarios_model_1.ComentariosModel.create({
                postId,
                texto,
                autorId,
                createdAt: new Date()
            });
            res.success(comentario, "Comentário criado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao criar comentário", 500);
        }
    },
    async getById(req, res) {
        try {
            const comentarioId = req.params.id;
            const comentario = await comentarios_model_1.ComentariosModel.getById(comentarioId);
            if (!comentario) {
                res.error("Comentário não encontrado", 404);
                return;
            }
            res.success(comentario, "Comentário encontrado!");
        }
        catch (error) {
            res.error("Erro ao buscar comentário", 500);
        }
    },
    async listAll(req, res) {
        try {
            const comentarios = await comentarios_model_1.ComentariosModel.listAll();
            res.success(comentarios, "Comentários listados com sucesso!");
        }
        catch (error) {
            res.error("Erro ao listar comentários", 500);
        }
    },
    async update(req, res) {
        try {
            const comentarioId = req.params.id;
            const { postId, texto } = req.body;
            const comentario = await comentarios_model_1.ComentariosModel.update(comentarioId, { postId, texto });
            res.success(comentario, "Comentário atualizado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao atualizar comentário", 500);
        }
    },
    async delete(req, res) {
        try {
            const comentarioId = req.params.id;
            await comentarios_model_1.ComentariosModel.delete(comentarioId);
            res.success(null, "Comentário deletado com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar comentário", 500);
        }
    }
};
//# sourceMappingURL=comentarios.controller.js.map