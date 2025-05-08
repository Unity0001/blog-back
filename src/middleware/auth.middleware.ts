import { NextFunction, Response } from "express";
import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { ExpressResponse } from "../core/adapter/ExpressAdapter";
import jwt, { JwtPayload } from "jsonwebtoken";

class AuthMiddleware {
    static async authenticate(req: IHttpRequest, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        const expressResponse = new ExpressResponse(res);

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
            const decoded = jwt.verify(token, secret) as JwtPayload;
            req.user = decoded; 
            next();
        } catch (error) {
            return expressResponse.error("Token inválido ou expirado", 401);
        }
    }
}

export default AuthMiddleware;