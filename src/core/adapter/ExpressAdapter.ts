import { Response } from "express";
import { IHttpResponse } from "../interfaces/IHttpResponse";

export class ExpressResponse implements IHttpResponse {
  private statusCodeSet = false;

  constructor(private res: Response) {}

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

  success(data: any, message: string = "Success") {
    this.res.status(200).json({ message, data });
  }

  error(message: string, statusCode: number = 500) {
    this.res.status(statusCode).json({ message });
  }
}
