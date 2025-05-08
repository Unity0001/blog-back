import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { CategoriaModel } from "../models/categoria.model";

export const CategoriaController = {
  async create(req: IHttpRequest, res: IHttpResponse) {
    if (!req.user) {
      return res.error("Usuário não autenticado", 401);
    }
    try {
      const { nome, slug } = req.body;
      const categoria = await CategoriaModel.create({ nome, slug });
      res.success(categoria, "Categoria criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') { 
          return res.error(`Já existe uma categoria com o nome "<span class="math-inline">\{req\.body\.nome\}" ou slug "</span>{req.body.slug}".`, 409);
        }
      }
      return res.error("Erro ao criar categoria", 500);
    }
  },

  async getById(req: IHttpRequest, res: IHttpResponse) {
    if (!req.user) {
      return res.error("Usuário não autenticado", 401);
    }
    try {
      const categoriaId = req.params.id;
      const categoria = await CategoriaModel.getById(categoriaId);
      if (!categoria) {
        res.error("Categoria não encontrada", 404);
        return;
      }
      res.success(categoria, "Categoria encontrada!");
    } catch (error) {
      res.error("Erro ao buscar categoria", 500);
    }
  },

  async getBySlug(req: IHttpRequest, res: IHttpResponse) {
    if (!req.user) {
      return res.error("Usuário não autenticado", 401);
    }
    try {
      const categoriaSlug = req.params.slug;
      const categoria = await CategoriaModel.getBySlug(categoriaSlug);

      if (!categoria) {
        res.error("Categoria não encontrada", 404);
        return;
      }
      res.success(categoria, "Categoria encontrada!");
    } catch (error) {
      res.error("Erro ao buscar categoria", 500);
    }
  },

  async listAll(req: IHttpRequest, res: IHttpResponse) {
    if (!req.user) {
      return res.error("Usuário não autenticado", 401);
    }
    try {
      const categorias = await CategoriaModel.listAll();
      res.success(categorias, "Categorias listadas com sucesso!");
    } catch (error) {
      res.error("Erro ao listar categorias", 500);
    }
  },

  async update(req: IHttpRequest, res: IHttpResponse) {
    if (!req.user) {
      return res.error("Usuário não autenticado", 401);
    }
    try {
      const categoriaId = req.params.id;
      const { nome, slug }: { nome: string, slug: string } = req.body;
      const categoria = await CategoriaModel.update(categoriaId, { nome, slug });
      res.success(categoria, "Categoria atualizada com sucesso!");
    } catch (error) {
      res.error("Erro ao atualizar categoria", 500);
    }
  },

  async delete(req: IHttpRequest, res: IHttpResponse) {
    if (!req.user) {
      return res.error("Usuário não autenticado", 401);
    }
    try {
      const categoriaId = req.params.id;
      await CategoriaModel.delete(categoriaId);
      res.success(null, "Categoria deletada com sucesso!", 204);
    } catch (error) {
      res.error("Erro ao deletar categoria", 500);
    }
  },
};
