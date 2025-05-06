import { Response, Request } from "express";
import { IHttpResponse } from "../interfaces/IHttpResponse";
import { IHttpRequest } from "../interfaces/IHttpRequest";

export class ExpressResponse implements IHttpResponse {
  private statusCodeSet = false;

  constructor(private res: Response) { }

  status(code: number): IHttpResponse {
    this.res.status(code);
    this.statusCodeSet = true;
    return this;
  }

  json(data: any): void {
    if (!this.statusCodeSet) {
      this.res.status(200);
    }
    this.res.json(data);
  }

  success(data: any, message: string = "Success", statusCode: number = 200) {
    if (statusCode === 204) {
      return this.res.status(204).send();
    }

    this.res.status(statusCode).json({ message, data });
  }


  error(message: string, statusCode: number = 500) {
    this.res.status(statusCode).json({ message });
  }
}

export class ExpressRequest implements IHttpRequest {
  constructor(private req: Request) { }

  get body() {
    return this.req.body;
  }

  get params(): any {
    return this.req.params;
  }

  get query(): any {
    return this.req.query;
  }

  get headers() {
    return this.req.headers;
  }
}