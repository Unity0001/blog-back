import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export class AuthService {
    static async authenticate(email: string, senha: string) {
        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }

        const user = await UserModel.findByEmail(email) as {
            id: string;
            email: string;
            nomeDeUsuario: string;
            nomeCompleto: string;
            senha: string;
            [key: string]: any;
        } | null;

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            throw new Error("Senha inválida");
        }

        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET não configurado no ambiente");
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        const { senha: _, ...userWithoutPassword } = user;
        return { token, user: userWithoutPassword };
    }
}
