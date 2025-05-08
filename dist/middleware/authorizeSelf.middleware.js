"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeSelf = authorizeSelf;
const ExpressAdapter_1 = require("../core/adapter/ExpressAdapter");
function authorizeSelf(req, res, next) {
    const expressResponse = new ExpressAdapter_1.ExpressResponse(res);
    if (!req.user) {
        return expressResponse.error("Usuário não autenticado", 401);
    }
    const { id } = req.params;
    const { id: userId } = req.user;
    if (id !== userId) {
        return expressResponse.error("Você não tem permissão para acessar este recurso", 403);
    }
    next();
}
//# sourceMappingURL=authorizeSelf.middleware.js.map