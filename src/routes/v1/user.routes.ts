import { Router } from "express";
import { UserController } from "../../controllers/user.controller";
import { ExpressRequest, ExpressResponse } from "../../core/adapter/ExpressAdapter";

const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    UserController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.getById(adaptedRequest, adaptedResponse);
    }).
    get("/username/:nomeDeUsuario", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.getByUsername(adaptedRequest, adaptedResponse);
    }).
    get("/", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.findAll(adaptedRequest, adaptedResponse);
    }).
    put("/update/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.update(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/:id", (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.delete(adaptedRequest, adaptedResponse);
    });

export default router;