import { Router } from 'express';
import categoriaRoutes from './v1/categoria.routes';
import postRoutes from './v1/post.routes';
import userRoutes from './v1/user.routes';
import comentariosRoutes from './v1/comentarios.routes';
import postTagRoutes from './v1/postTag.routes';
import tagRoutes from './v1/tag.routes';
import AuthMiddleware from '../middleware/auth.middleware';
const router = Router();

router.use('/categorias', AuthMiddleware.authenticate, categoriaRoutes);
router.use('/posts', AuthMiddleware.authenticate, postRoutes);
router.use('/users', userRoutes);
router.use('/comentarios', AuthMiddleware.authenticate, comentariosRoutes);
router.use('/postTags', AuthMiddleware.authenticate, postTagRoutes);
router.use('/tags', AuthMiddleware.authenticate, tagRoutes);

export default router;