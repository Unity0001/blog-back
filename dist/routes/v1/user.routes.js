"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user.controller");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const auth_middleware_1 = __importDefault(require("../../middleware/auth.middleware"));
const authorizeSelf_middleware_1 = require("../../middleware/authorizeSelf.middleware");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", auth_middleware_1.default.authenticate, (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.getById(adaptedRequest, adaptedResponse);
}).
    get("/username/:nomeDeUsuario", auth_middleware_1.default.authenticate, (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.getByUsername(adaptedRequest, adaptedResponse);
}).
    get("/", auth_middleware_1.default.authenticate, (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.findAll(adaptedRequest, adaptedResponse);
}).
    put("/update/:id", auth_middleware_1.default.authenticate, authorizeSelf_middleware_1.authorizeSelf, (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.update(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", auth_middleware_1.default.authenticate, authorizeSelf_middleware_1.authorizeSelf, (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.delete(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map