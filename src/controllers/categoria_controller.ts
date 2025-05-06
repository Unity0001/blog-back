import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { CategoriaModel } from "../models/categoria_model";

export const CategoriaController = {
  async create(req: IHttpRequest, res: IHttpResponse) {
    try {
      const { nome, slug } = req.body;
      const categoria = await CategoriaModel.create({ nome, slug });

      res.success(categoria, "Categoria criada com sucesso!");
    } catch (error) {
      res.error("Erro ao criar categoria", 500);
    }
  },

  async getById(req: IHttpRequest, res: IHttpResponse) {
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
    try {
      const categoriaSlug = req.params.slug;
      const categoria = await CategoriaModel.getBySlug(categoriaSlug);

      if (!categoria) {
        res.error("Categoria não encontrada", 404);
        return;
      }
    } catch (error) {
      res.error("Erro ao buscar categoria", 500);
    }
  },
};
