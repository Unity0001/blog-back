"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.UserController = {
    async create(req, res) {
        try {
            const { nomeDeUsuario, email, senha, nomeCompleto, } = req.body;
            const hashedPassword = await bcrypt_1.default.hash(senha, 10);
            const user = await user_model_1.UserModel.create({
                nomeDeUsuario,
                email,
                senha: hashedPassword,
                nomeCompleto
            });
            const { senha: _, ...userWithoutPassword } = user;
            const secret = process.env.JWT_SECRET;
            const expiresIn = process.env.JWT_EXPIRES_IN;
            if (!secret) {
                res.error("JWT_SECRET não configurado no ambiente", 500);
                return;
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn });
            res.success({ token, user: userWithoutPassword }, "Usuário criado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao criar usuário", 500);
        }
    },
    async getById(req, res) {
        try {
            const { id } = req.params;
            const user = await user_model_1.UserModel.getById(id);
            if (!user) {
                res.error("Usuário não encontrado", 404);
                return;
            }
            const { senha, ...userWithoutPassword } = user;
            res.success(userWithoutPassword, "Usuário encontrado com sucesso!");
        }
        catch (error) {
            res.error("Erro ao buscar usuário", 500);
        }
    },
    async getByUsername(req, res) {
        try {
            const { nomeDeUsuario } = req.params;
            const user = await user_model_1.UserModel.getByUsername(nomeDeUsuario);
            if (!user) {
                res.error("Usuário não encontrado", 404);
                return;
            }
            const { senha, ...userWithoutPassword } = user;
            res.success(userWithoutPassword, "Usuário encontrado com sucesso!");
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
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            if (!email || !senha) {
                res.error("Email e senha são obrigatórios", 400);
                return;
            }
            const user = await user_model_1.UserModel.findByEmail(email);
            if (!user) {
                res.error("Usuário não encontrado", 404);
                return;
            }
            const isPasswordValid = await bcrypt_1.default.compare(senha, user.senha);
            if (!isPasswordValid) {
                res.error("Senha inválida", 401);
                return;
            }
            const secret = process.env.JWT_SECRET;
            const expiresIn = process.env.JWT_EXPIRES_IN;
            if (!secret) {
                res.error("JWT_SECRET não configurado no ambiente", 500);
                return;
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn });
            const { senha: _, ...userWithoutPassword } = user;
            res.success({ token, user: userWithoutPassword }, "Login realizado com sucesso!");
        }
        catch (error) {
            console.error("Erro ao fazer login:", error);
            res.error("Erro interno ao fazer login", 500);
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            let { nomeDeUsuario, email, senha, nomeCompleto } = req.body;
            if (senha) {
                senha = await bcrypt_1.default.hash(senha, 10);
            }
            else {
                senha = undefined;
            }
            const user = await user_model_1.UserModel.update(id, {
                nomeDeUsuario,
                email,
                senha,
                nomeCompleto,
            });
            const { senha: _, ...userWithoutPassword } = user;
            res.success(userWithoutPassword, "Usuário atualizado com sucesso!");
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