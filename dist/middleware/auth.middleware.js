"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressAdapter_1 = require("../core/adapter/ExpressAdapter");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthMiddleware {
    static async authenticate(req, res, next) {
        const authHeader = req.headers.authorization;
        const expressResponse = new ExpressAdapter_1.ExpressResponse(res);
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return expressResponse.error("Token não fornecido ou formato inválido", 401);
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return expressResponse.error("Token não fornecido", 401);
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return expressResponse.error("JWT_SECRET não configurado no ambiente", 500);
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, secret);
            req.user = decoded;
            next();
        }
        catch (error) {
            return expressResponse.error("Token inválido ou expirado", 401);
        }
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map