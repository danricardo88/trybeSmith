import { Router } from 'express';
import prodController from '../controllers/prodController';

const router = Router();

router.post('/products', prodController.create);
router.get('/products', prodController.getAll);

export default router;