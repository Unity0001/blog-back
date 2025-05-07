import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { UserModel } from "../models/user.model";

export const UserController = {
    async create(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { nomeDeUsuario, email, senha, nomeCompleto, } = req.body;
            const user = await UserModel.create({ nomeDeUsuario, email, senha, nomeCompleto });
            res.success(user, "Usuário criado com sucesso!");
        } catch (error) {
            res.error("Erro ao criar usuário", 500);
        }
    },

    async getById(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            const user = await UserModel.getById(id);
            res.success(user, "Usuário encontrado com sucesso!");
        } catch (error) {
            res.error("Erro ao buscar usuário", 500);
        }
    },

    async getByUsername(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { nomeDeUsuario } = req.params;
            const user = await UserModel.getByUsername(nomeDeUsuario);
            res.success(user, "Usuário encontrado com sucesso!");
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

    async update(req: IHttpRequest, res: IHttpResponse) {
        try {
            const { id } = req.params;
            const { nomeDeUsuario, email, senha, nomeCompleto } = req.body;
            const user = await UserModel.update(id, { nomeDeUsuario, email, senha, nomeCompleto });
            res.success(user, "Usuário atualizado com sucesso!");
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
