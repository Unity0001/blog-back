"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tag_controller_1 = require("../../controllers/tag.controller");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const ExpressAdapter_2 = require("../../core/adapter/ExpressAdapter");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    tag_controller_1.TagController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    tag_controller_1.TagController.getById(adaptedRequest, adaptedResponse);
}).
    get("/slug/:slug", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    tag_controller_1.TagController.getBySlug(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    tag_controller_1.TagController.listAll(adaptedRequest, adaptedResponse);
}).
    put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    tag_controller_1.TagController.update(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    tag_controller_1.TagController.delete(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=tag.routes.js.map