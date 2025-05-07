"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postTag_controller_1 = require("../../controllers/postTag.controller");
const ExpressAdapter_1 = require("../../core/adapter/ExpressAdapter");
const ExpressAdapter_2 = require("../../core/adapter/ExpressAdapter");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    postTag_controller_1.PostTagController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    postTag_controller_1.PostTagController.getById(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    postTag_controller_1.PostTagController.listAll(adaptedRequest, adaptedResponse);
}).
    delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    postTag_controller_1.PostTagController.deletePostTag(adaptedRequest, adaptedResponse);
}).
    delete("/delete/tags/:postId", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    postTag_controller_1.PostTagController.deleteTagsFromPost(adaptedRequest, adaptedResponse);
}).
    delete("/delete/posts/:tagId", (req, res) => {
    const adaptedRequest = new ExpressAdapter_1.ExpressRequest(req);
    const adaptedResponse = new ExpressAdapter_2.ExpressResponse(res);
    postTag_controller_1.PostTagController.deletePostsFromTags(adaptedRequest, adaptedResponse);
});
exports.default = router;
//# sourceMappingURL=postTag.routes.js.map