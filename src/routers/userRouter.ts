import { Router } from 'express';
import userCotroller from '../controllers/userCotroller';

const router = Router();

router.post('/users', userCotroller.create);

export default router;