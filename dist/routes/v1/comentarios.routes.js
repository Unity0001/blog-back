"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const comentarios_controller_1 = require("../../controllers/comentarios.controller");
const ExpressAdapter_2 = require("../../core/adapter/ExpressAdapter");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    comentarios_controller_1.ComentariosController.create(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    comentarios_controller_1.ComentariosController.listAll(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    comentarios_controller_1.ComentariosController.getById(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    comentarios_controller_1.ComentariosController.listAll(adaptedRequest, adaptedResponse);
}).
    put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    comentarios_controller_1.ComentariosController.update(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    comentarios_controller_1.ComentariosController.delete(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=comentarios.routes.js.map