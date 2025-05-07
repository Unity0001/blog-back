import { Router } from "express";
import { PostController } from "../../controllers/post.controller";
import { ExpressRequest, ExpressResponse } from "../../core/adapter/ExpressAdapter";

const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    PostController.create(adaptedRequest, adaptedResponse);
}).
get("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    PostController.listAll(adaptedRequest, adaptedResponse);
}).
get("/:id", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    PostController.getById(adaptedRequest, adaptedResponse);
}).
put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    PostController.update(adaptedRequest, adaptedResponse);
}).
delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    PostController.delete(adaptedRequest, adaptedResponse);
});

export default router;