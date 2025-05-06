import { Router } from 'express';
import categoriaRoutes from './v1/categoria.routes';
    
const router = Router();

router.use('/categorias', categoriaRoutes);

export default router;