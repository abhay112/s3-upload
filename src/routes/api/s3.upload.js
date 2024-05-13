import exporess from 'express';
import { login } from '../../controllers/auth';

const router = exporess.Router();

/**
 * @route   POST /auth/login
 * @desc    Login a user
 * @access  Public
 */
router.post('/login', login);


export default router;
