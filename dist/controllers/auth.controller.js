"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_services_1 = require("../services/auth.services");
exports.AuthController = {
    async authenticate(req, res) {
        const { email, senha } = req.body;
        try {
            const { token, user } = await auth_services_1.AuthService.authenticate(email, senha);
            res.success({ token, user }, "Login realizado com sucesso!");
        }
        catch (error) {
            res.error(error.message, 401);
        }
    }
};
exports.default = exports.AuthController;
//# sourceMappingURL=auth.controller.js.map