"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
const library_1 = require("@prisma/client/runtime/library");
const categoria_model_1 = require("../models/categoria.model");
exports.CategoriaController = {
    async create(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const { nome, slug } = req.body;
            const categoria = await categoria_model_1.CategoriaModel.create({ nome, slug });
            res.success(categoria, "Categoria criada com sucesso!");
        }
        catch (error) {
            console.error("Erro ao criar categoria:", error);
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    return res.error(`Já existe uma categoria com o nome "<span class="math-inline">\{req\.body\.nome\}" ou slug "</span>{req.body.slug}".`, 409);
                }
            }
            return res.error("Erro ao criar categoria", 500);
        }
    },
    async getById(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const categoriaId = req.params.id;
            const categoria = await categoria_model_1.CategoriaModel.getById(categoriaId);
            if (!categoria) {
                res.error("Categoria não encontrada", 404);
                return;
            }
            res.success(categoria, "Categoria encontrada!");
        }
        catch (error) {
            res.error("Erro ao buscar categoria", 500);
        }
    },
    async getBySlug(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const categoriaSlug = req.params.slug;
            const categoria = await categoria_model_1.CategoriaModel.getBySlug(categoriaSlug);
            if (!categoria) {
                res.error("Categoria não encontrada", 404);
                return;
            }
            res.success(categoria, "Categoria encontrada!");
        }
        catch (error) {
            res.error("Erro ao buscar categoria", 500);
        }
    },
    async listAll(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const categorias = await categoria_model_1.CategoriaModel.listAll();
            res.success(categorias, "Categorias listadas com sucesso!");
        }
        catch (error) {
            res.error("Erro ao listar categorias", 500);
        }
    },
    async update(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const categoriaId = req.params.id;
            const { nome, slug } = req.body;
            const categoria = await categoria_model_1.CategoriaModel.update(categoriaId, { nome, slug });
            res.success(categoria, "Categoria atualizada com sucesso!");
        }
        catch (error) {
            res.error("Erro ao atualizar categoria", 500);
        }
    },
    async delete(req, res) {
        if (!req.user) {
            return res.error("Usuário não autenticado", 401);
        }
        try {
            const categoriaId = req.params.id;
            await categoria_model_1.CategoriaModel.delete(categoriaId);
            res.success(null, "Categoria deletada com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar categoria", 500);
        }
    },
};
//# sourceMappingURL=categoria.controller.js.map