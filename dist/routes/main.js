"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_routes_1 = __importDefault(require("./v1/categoria.routes"));
const post_routes_1 = __importDefault(require("./v1/post.routes"));
const user_routes_1 = __importDefault(require("./v1/user.routes"));
const comentarios_routes_1 = __importDefault(require("./v1/comentarios.routes"));
const router = (0, express_1.Router)();
router.use('/categorias', categoria_routes_1.default);
router.use('/posts', post_routes_1.default);
router.use('/users', user_routes_1.default);
router.use('/comentarios', comentarios_routes_1.default);
exports.default = router;
//# sourceMappingURL=main.js.map