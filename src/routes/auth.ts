import { Router} from 'express';
import {login} from '../controllers/Auth';
const router:Router=Router();

//router.post('/signup',signup);
router.post('/login',login);

export default router;