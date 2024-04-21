import express from 'express';
import authSign from '../controllers/auth-sign-controller.js';

const router = express.Router();
import authController from '../controllers/auth-log-controller.js';



router.post('/login', authController.login);
router.post('/signup', authSign.signup);
// router.post('/login', login);
 
export default router;
 