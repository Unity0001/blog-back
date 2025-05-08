import { NextFunction, Response } from "express";
import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { ExpressResponse } from "../core/adapter/ExpressAdapter";
import { JwtPayload } from "jsonwebtoken";


export function authorizeSelf(req: IHttpRequest, res: Response, next: NextFunction) {
    const expressResponse = new ExpressResponse(res);

    if (!req.user) {
        return expressResponse.error("Usuário não autenticado", 401);
    }

    const { id } = req.params;
    const { id: userId } = req.user as JwtPayload;

    if (id !== userId) {
        return expressResponse.error("Você não tem permissão para acessar este recurso", 403);
    }

    next();
}