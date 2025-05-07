"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../../controllers/post.controller");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    post_controller_1.PostController.create(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    post_controller_1.PostController.listAll(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    post_controller_1.PostController.getById(adaptedRequest, adaptedResponse);
}).
    put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    post_controller_1.PostController.update(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_1.ExpressResponse(res);
    post_controller_1.PostController.delete(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=post.routes.js.map