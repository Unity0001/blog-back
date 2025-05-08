import { IHttpRequest } from "../core/interfaces/IHttpRequest";
import { IHttpResponse } from "../core/interfaces/IHttpResponse";
import { AuthService } from "../services/auth.services";

export const AuthController = {
    async authenticate(req: IHttpRequest, res: IHttpResponse) {
        const { email, senha } = req.body;

        try {
            const { token, user } = await AuthService.authenticate(email, senha);
            res.success({ token, user }, "Login realizado com sucesso!");
        } catch (error: any) {
            res.error(error.message, 401);
        }
    }
}

export default AuthController;
