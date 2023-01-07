import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.get('/orders', orderController.getAll);

export default router;