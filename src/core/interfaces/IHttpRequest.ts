import { JwtPayload } from "jsonwebtoken";

export interface IHttpRequest {
    body: any;
    params: any;
    query: any;
    headers: any;
    user?: JwtPayload;
}
