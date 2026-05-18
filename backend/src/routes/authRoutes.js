import { Router } from 'express';

import {
  signup,
  login,
  me,
  updateProfile,
} from '../controllers/authController.js';

import { authenticate } from '../middleware/auth.js';

import {
  signupValidation,
  loginValidation,
  validate,
} from '../middleware/validationMiddleware.js';
import { authRateLimiter } from '../middleware/rateLimiters.js';



const router = Router();

<<<<<<< HEAD

=======
>>>>>>> 5ea7ed8e455e42aeeefa33a5d759b561e34030ab
router.post(
  '/signup',
  signupValidation,
  validate,
  signup
<<<<<<< HEAD

=======
>>>>>>> 5ea7ed8e455e42aeeefa33a5d759b561e34030ab
);

router.post(
  '/login',
  loginValidation,
  validate,
  login
);
<<<<<<< HEAD
router.post('/signup', authRateLimiter, signup);
router.post('/login', authRateLimiter, login);
=======
>>>>>>> 5ea7ed8e455e42aeeefa33a5d759b561e34030ab

router.get('/me', authenticate, me);

router.put('/profile', authenticate, updateProfile);

export default router;