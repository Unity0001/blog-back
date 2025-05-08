import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { PostTagModel } from "../models/postTag.model";

export const PostTagController = {
    async create(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { postId, tagId } = req.body;
            const postTag = await PostTagModel.create({ postId, tagId });
            res.success(postTag, "PostTag criado com sucesso!");
        } catch (error) {
            res.error("Erro ao criar postTag", 500);
        }
    },

    async getById(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const postTag = await PostTagModel.getById(id);
            res.success(postTag, "PostTag encontrado com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar postTag", 500);
        }
    },

    async listAll(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const postTags = await PostTagModel.listAll();
            res.success(postTags, "PostTags encontrados com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar postTags", 500);
        }
    },

    async deletePostTag(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            await PostTagModel.deletePostTag(id);
            res.success(null, "PostTag deletado com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar postTag", 500);
        }
    },

    async deleteTagsFromPost(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { postId } = req.params;
            await PostTagModel.deleteTagsFromPost(postId);
            res.success(null, "Tags deletadas do post com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar tags do post", 500);
        }
    },

    async deletePostsFromTags(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { tagId } = req.params;
            await PostTagModel.deletePostsFromTags(tagId);
            res.success(null, "Posts deletados das tags com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar posts das tags", 500);
        }
    }
}