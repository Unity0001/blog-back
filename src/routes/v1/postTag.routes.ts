import { Router } from "express";
import { PostTagController } from "../../controllers/postTag.controller";
import { ExpressRequest } from "../../core/adapter/ExpressAdapter";
import { ExpressResponse } from "../../core/adapter/ExpressAdapter";
const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    PostTagController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        PostTagController.getById(adaptedRequest, adaptedResponse);
    }).
    get("/", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        PostTagController.listAll(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        PostTagController.deletePostTag(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/tags/:postId", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        PostTagController.deleteTagsFromPost(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/posts/:tagId", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        PostTagController.deletePostsFromTags(adaptedRequest, adaptedResponse);
    })
    
export default router;
