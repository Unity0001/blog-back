"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../models/user.model");
exports.UserController = {
    async create(req, res) {
        try {
            const { nomeDeUsuario, email, senha, nomeCompleto, } = req.body;
            const user = await user_model_1.UserModel.create({ nomeDeUsuario, email, senha, nomeCompleto });
            res.success(user, "Usuário criado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao criar usuário", 500);
        }
    },
    async getById(req, res) {
        try {
            const { id } = req.params;
            const user = await user_model_1.UserModel.getById(id);
            res.success(user, "Usuário encontrado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar usuário", 500);
        }
    },
    async getByUsername(req, res) {
        try {
            const { nomeDeUsuario } = req.params;
            const user = await user_model_1.UserModel.getByUsername(nomeDeUsuario);
            res.success(user, "Usuário encontrado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar usuário", 500);
        }
    },
    async findAll(req, res) {
        try {
            const users = await user_model_1.UserModel.findAll();
            res.success(users, "Usuários encontrados com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar usuários", 500);
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { nomeDeUsuario, email, senha, nomeCompleto } = req.body;
            const user = await user_model_1.UserModel.update(id, { nomeDeUsuario, email, senha, nomeCompleto });
            res.success(user, "Usuário atualizado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao atualizar usuário", 500);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            await user_model_1.UserModel.delete(id);
            res.success(null, "Usuário deletado com sucesso!", 204);
        }
        catch (error) {
            res.error("Erro ao deletar usuário", 500);
        }
    }
};
//# sourceMappingURL=user.controller.js.map