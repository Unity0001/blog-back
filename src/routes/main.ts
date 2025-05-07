import { Router } from 'express';
import categoriaRoutes from './v1/categoria.routes';
import postRoutes from './v1/post.routes';
import userRoutes from './v1/user.routes';
import comentariosRoutes from './v1/comentarios.routes';
const router = Router();

router.use('/categorias', categoriaRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comentarios', comentariosRoutes);

export default router;