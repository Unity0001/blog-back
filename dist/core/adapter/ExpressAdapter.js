"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressRequest = exports.ExpressResponse = void 0;
class ExpressResponse {
    constructor(res) {
        this.res = res;
        this.statusCodeSet = false;
    }
    status(code) {
        this.res.status(code);
        this.statusCodeSet = true;
        return this;
    }
    json(data) {
        if (!this.statusCodeSet) {
            this.res.status(200);
        }
        this.res.json(data);
    }
    success(data, message = "Success", statusCode = 200) {
        if (statusCode === 204) {
            return this.res.status(204).send();
        }
        this.res.status(statusCode).json({ message, data });
    }
    error(message, statusCode = 500) {
        this.res.status(statusCode).json({ message });
    }
}
exports.ExpressResponse = ExpressResponse;
class ExpressRequest {
    constructor(req) {
        this.req = req;
    }
    get body() {
        return this.req.body;
    }
    get params() {
        return this.req.params;
    }
    get query() {
        return this.req.query;
    }
    get headers() {
        return this.req.headers;
    }
}
exports.ExpressRequest = ExpressRequest;
//# sourceMappingURL=ExpressAdapter.js.map