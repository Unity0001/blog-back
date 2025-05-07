import { Router } from "express";
import { ExpressRequest } from "../../core/adapter/ExpressAdapter";
import { ComentariosController } from "../../controllers/comentarios.controller";
import { ExpressResponse } from "../../core/adapter/ExpressAdapter";

const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    ComentariosController.create(adaptedRequest, adaptedResponse);
}).
    get("/", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        ComentariosController.listAll(adaptedRequest, adaptedResponse);
    }).
    get("/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        ComentariosController.getById(adaptedRequest, adaptedResponse);
    }).
    get("/", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        ComentariosController.listAll(adaptedRequest, adaptedResponse);
    }).
    put("/update/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        ComentariosController.update(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        ComentariosController.delete(adaptedRequest, adaptedResponse);
    });


export default router;
