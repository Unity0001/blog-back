export interface IHttpResponse {
  status(code: number): IHttpResponse;
  json(data: any): void;
  success(data: any, message?: string): void;
  error(message: string, statusCode: number): void;
}
