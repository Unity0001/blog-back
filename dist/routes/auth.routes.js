"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const ExpressAdapter_1 = require("../core/adapter/ExpressAdapter");
const authRoutes = (0, express_1.Router)();
authRoutes.post("/authenticate", async (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    try {
        await auth_controller_1.AuthController.authenticate(adaptedRequest, adaptedResponse);
    }
    catch (error) {
        console.error(error);
        adaptedResponse.error("Erro ao autenticar usuário", 500);
    }
});
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map