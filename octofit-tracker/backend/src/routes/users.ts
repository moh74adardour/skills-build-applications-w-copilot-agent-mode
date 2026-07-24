import { Router } from 'express';

import User from '../models/User.js';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const users = await User.find().sort({ username: 1 }).lean();
    res.json({ users });
  } catch (error) {
    next(error);
  }
});

export default router;
