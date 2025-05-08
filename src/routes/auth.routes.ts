import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { ExpressRequest, ExpressResponse } from "../core/adapter/ExpressAdapter";

const authRoutes = Router();

authRoutes.post("/authenticate", async (req, res) => {
    const adaptedRequest = new ExpressRequest(req);
    const adaptedResponse = new ExpressResponse(res);

    try {
        await AuthController.authenticate(adaptedRequest, adaptedResponse);
    } catch (error) {
        console.error(error);
        adaptedResponse.error("Erro ao autenticar usuário", 500);
    }
});

export default authRoutes;
