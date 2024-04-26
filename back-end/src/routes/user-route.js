import express from 'express';
import { signup, login, getFavorites, getBooks } from '../controllers/user-controller.js';
import requireLogin from '../middleware/requireLogin.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getFavorites', requireLogin, getFavorites);
router.get('/books', getBooks);

export default router;