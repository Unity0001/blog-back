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
const postTag_routes_1 = __importDefault(require("./v1/postTag.routes"));
const tag_routes_1 = __importDefault(require("./v1/tag.routes"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const router = (0, express_1.Router)();
router.use('/categorias', auth_middleware_1.default.authenticate, categoria_routes_1.default);
router.use('/posts', auth_middleware_1.default.authenticate, post_routes_1.default);
router.use('/users', user_routes_1.default);
router.use('/comentarios', auth_middleware_1.default.authenticate, comentarios_routes_1.default);
router.use('/postTags', auth_middleware_1.default.authenticate, postTag_routes_1.default);
router.use('/tags', auth_middleware_1.default.authenticate, tag_routes_1.default);
exports.default = router;
//# sourceMappingURL=main.js.map