import { Router } from 'express';

import prisma from '../services/db.js';

const router = Router();

router.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ data: users });
});

router.get('/test', (req, res) => {
  res.send('<h1>server response</h1>');
});

export default router;
