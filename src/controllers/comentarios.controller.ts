import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { ComentariosModel } from "../models/comentarios.model";

export const ComentariosController = {
    async create(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { postId, texto, autorId }: { postId: string, texto: string, autorId: string } = req.body;
            const comentario = await ComentariosModel.create({
                postId,
                texto,
                autorId,
                createdAt: new Date()
            });
            res.success(comentario, "Comentário criado com sucesso!");
        } catch (error) {
            res.error("Erro ao criar comentário", 500);
        }
    },

    async getById(req: IHttpRequest, res: IHttpResponse) {
        try {
            const comentarioId = req.params.id;
            const comentario = await ComentariosModel.getById(comentarioId);
            if (!comentario) {
                res.error("Comentário não encontrado", 404);
                return;
            }
            res.success(comentario, "Comentário encontrado!");
        } catch (error) {
            res.error("Erro ao buscar comentário", 500);
        }
    },

    async listAll(req: IHttpRequest, res: IHttpResponse) {
        try {
            const comentarios = await ComentariosModel.listAll();
            res.success(comentarios, "Comentários listados com sucesso!");
        } catch (error) {
            res.error("Erro ao listar comentários", 500);
        }
    },

    async update(req: IHttpRequest, res: IHttpResponse) {
        try {
            const comentarioId = req.params.id;
            const { postId, texto }: { postId: string, texto: string } = req.body;
            const comentario = await ComentariosModel.update(comentarioId, { postId, texto });
            res.success(comentario, "Comentário atualizado com sucesso!");
        } catch (error) {
            res.error("Erro ao atualizar comentário", 500);
        }
    },

    async delete(req: IHttpRequest, res: IHttpResponse) {
        try {
            const comentarioId = req.params.id;
            await ComentariosModel.delete(comentarioId);
            res.success(null, "Comentário deletado com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar comentário", 500);
        }
    }
}