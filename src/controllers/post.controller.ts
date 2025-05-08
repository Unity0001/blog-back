import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { PostModel } from "../models/post.model";


export const PostController = {
    async create(req: IHttpRequest, res: IHttpResponse) {

        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { titulo, conteudo, categoriaId, slug } = req.body;
            const post = await PostModel.create({
                titulo: titulo,
                conteudo: conteudo,
                autorId: req.user?.id,
                categoriaId: categoriaId,
                slug: slug,
                publishedAt: new Date(),
            });
            res.success(post, "Post criado com sucesso!");
        } catch (error) {
            res.error("Erro ao criar post", 500);
        }
    },

    async getById(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const post = await PostModel.getById(id);
            res.success(post, "Post encontrado com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar post", 500);
        }
    },

    async listAll(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const posts = await PostModel.listAll();
            res.success(posts, "Posts encontrados com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar posts", 500);
        }
    },

    async update(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            const { titulo, conteudo, slug } = req.body;
            const post = await PostModel.update(id, { titulo, conteudo, slug });
            res.success(post, "Post atualizado com sucesso!");
        } catch (error) {
            res.error("Erro ao atualizar post", 500);
        }
    },

    async delete(req: IHttpRequest, res: IHttpResponse) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { id } = req.params;
            await PostModel.delete(id);
            res.success(null, "Post deletado com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar post", 500);
        }
    },
}
