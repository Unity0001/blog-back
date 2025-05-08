import { Router } from "express";
import { UserController } from "../../controllers/user.controller";
import { ExpressRequest, ExpressResponse } from "../../core/adapter/ExpressAdapter";
import AuthMiddleware from "../../middleware/auth.middleware";
import { authorizeSelf } from "../../middleware/authorizeSelf.middleware";
const router = Router();

router.post("/", (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);
    UserController.create(adaptedRequest, adaptedResponse);
}).
    get("/:id", AuthMiddleware.authenticate, (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.getById(adaptedRequest, adaptedResponse);
    }).
    get("/username/:nomeDeUsuario", AuthMiddleware.authenticate, (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.getByUsername(adaptedRequest, adaptedResponse);
    }).
    get("/", AuthMiddleware.authenticate, (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.findAll(adaptedRequest, adaptedResponse);
    }).
    put("/update/:id", AuthMiddleware.authenticate, authorizeSelf, (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.update(adaptedRequest, adaptedResponse);
    }).
    delete("/delete/:id", AuthMiddleware.authenticate, authorizeSelf, (req, res) => {
        const adaptedRequest = new ExpressRequest(req);
        const adaptedResponse = new ExpressResponse(res);
        UserController.delete(adaptedRequest, adaptedResponse);
    });

export default router;