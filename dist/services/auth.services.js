"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
class AuthService {
    static async authenticate(email, senha) {
        if (!email || !senha) {
            throw new Error("Email e senha são obrigatórios");
        }
        const user = await user_model_1.UserModel.findByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const isPasswordValid = await bcrypt_1.default.compare(senha, user.senha);
        if (!isPasswordValid) {
            throw new Error("Senha inválida");
        }
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET não configurado no ambiente");
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        const { senha: _, ...userWithoutPassword } = user;
        return { token, user: userWithoutPassword };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.services.js.map