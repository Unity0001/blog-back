"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user.controller");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.getById(adaptedRequest, adaptedResponse);
}).
    get("/username/:nomeDeUsuario", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.getByUsername(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.findAll(adaptedRequest, adaptedResponse);
}).
    put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.update(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    user_controller_1.UserController.delete(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map