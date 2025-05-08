import jwt from "jsonwebtoken";
import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";

export const UserController = {
    async create(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { nomeDeUsuario, email, senha, nomeCompleto, } = req.body;
            const hashedPassword = await bcrypt.hash(senha, 10);

            const user = await UserModel.create({
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

            const token = jwt.sign({ id: user.id }, secret, { expiresIn });
            res.success({ token, user: userWithoutPassword }, "Usuário criado com sucesso!");
        } catch (error) {
            res.error("Erro ao criar usuário", 500);
        }
    },

    async getById(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            const user = await UserModel.getById(id);
            if (!user) {
                res.error("Usuário não encontrado", 404);
                return;
            }
            const { senha, ...userWithoutPassword } = user;
            res.success(userWithoutPassword, "Usuário encontrado com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar usuário", 500);
        }
    },

    async getByUsername(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { nomeDeUsuario } = req.params;
            const user = await UserModel.getByUsername(nomeDeUsuario);
            if (!user) {
                res.error("Usuário não encontrado", 404);
                return;
            }
            const { senha, ...userWithoutPassword } = user;
            res.success(userWithoutPassword, "Usuário encontrado com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar usuário", 500);
        }
    },

    async findAll(req: IHttpRequest, res: IHttpResponse) {
        try {
            const users = await UserModel.findAll();
            res.success(users, "Usuários encontrados com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar usuários", 500);
        }
    },

    async login(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                res.error("Email e senha são obrigatórios", 400);
                return;
            }

            const user = await UserModel.findByEmail(email);
            if (!user) {
                res.error("Usuário não encontrado", 404);
                return;
            }

            const isPasswordValid = await bcrypt.compare(senha, user.senha);
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

            const token = jwt.sign({ id: user.id }, secret, { expiresIn });
            const { senha: _, ...userWithoutPassword } = user;

            res.success({ token, user: userWithoutPassword }, "Login realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            res.error("Erro interno ao fazer login", 500);
        }
    },

    async update(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            let { nomeDeUsuario, email, senha, nomeCompleto } = req.body;

            if (senha) {
                senha = await bcrypt.hash(senha, 10);
            } else {
                senha = undefined;
            }

            const user = await UserModel.update(id, {
                nomeDeUsuario,
                email,
                senha,
                nomeCompleto,
            });

            const { senha: _, ...userWithoutPassword } = user;
            res.success(userWithoutPassword, "Usuário atualizado com sucesso!");
        } catch (error) {
            res.error("Erro ao atualizar usuário", 500);
        }
    },

    async delete(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            await UserModel.delete(id);
            res.success(null, "Usuário deletado com sucesso!", 204);
        } catch (error) {
            res.error("Erro ao deletar usuário", 500);
        }
    }

}
