import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { TagModel } from "../models/tag.model";

export const TagController = {
    async create(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { nome, slug } = req.body;
            const tag = await TagModel.create({ nome, slug });
            res.success(tag, "Tag criada com sucesso!");
        } catch (error) {
            res.error("Erro ao criar tag", 500);
        }
    },

    async getById(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            const tag = await TagModel.getById(id);
            res.success(tag, "Tag encontrada com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar tag", 500);
        }
    },

    async getBySlug(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { slug } = req.params;
            const tag = await TagModel.getBySlug(slug);
            res.success(tag, "Tag encontrada com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar tag", 500);
        }
    },

    async listAll(req: IHttpRequest, res: IHttpResponse) {
        try {
            const tags = await TagModel.listAll();
            res.success(tags, "Tags encontradas com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar tags", 500);
        }
    },

    async update(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            const { nome, slug } = req.body;
            const tag = await TagModel.update(id, { nome, slug });
            res.success(tag, "Tag atualizada com sucesso!");
        } catch (error) {
            res.error("Erro ao atualizar tag", 500);
        }
    },

    async delete(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            await TagModel.delete(id);
            res.success(null, "Tag deletada com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar tag", 500);
        }
    }
}
