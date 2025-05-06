"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../../controllers/categoria.controller");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    categoria_controller_1.CategoriaController.create(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    categoria_controller_1.CategoriaController.listAll(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    categoria_controller_1.CategoriaController.getById(adaptedRequest, adaptedResponse);
}).
    get("/slug/:slug", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    categoria_controller_1.CategoriaController.getBySlug(adaptedRequest, adaptedResponse);
}).
    put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    categoria_controller_1.CategoriaController.update(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    categoria_controller_1.CategoriaController.delete(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=categoria.routes.js.map