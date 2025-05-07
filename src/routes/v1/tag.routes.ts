import { Router } from "express";
import { TagController } from "../../controllers/tag.controller";
import { ExpressRequest } from "../../core/adapter/ExpressAdapter";
import { ExpressResponse } from "../../core/adapter/ExpressAdapter";

const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    TagController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        TagController.getById(adaptedRequest, adaptedResponse);
    }).
    get("/slug/:slug", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        TagController.getBySlug(adaptedRequest, adaptedResponse);
    }).
    get("/", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        TagController.listAll(adaptedRequest, adaptedResponse);
    }).
    put("/update/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        TagController.update(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        TagController.delete(adaptedRequest, adaptedResponse);
    });

export default router;