import { Router } from "express";
import { CategoriaController } from "../../controllers/categoria.controller";
import { ExpressRequest, ExpressResponse } from "../../core/adapter/ExpressAdapter";

const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    CategoriaController.create(adaptedRequest, adaptedResponse);
}).
get("/", (req, res  ) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    CategoriaController.listAll(adaptedRequest, adaptedResponse);
}).
get("/:id", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    CategoriaController.getById(adaptedRequest, adaptedResponse);
}).
get("/slug/:slug", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    CategoriaController.getBySlug(adaptedRequest, adaptedResponse);
}).
put("/update/:id", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    CategoriaController.update(adaptedRequest, adaptedResponse);
}).
delete("/delete/:id", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    CategoriaController.delete(adaptedRequest, adaptedResponse);
});



export default router;
