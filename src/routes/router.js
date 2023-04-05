import { Router } from 'express';

import prisma from '../services/db.js';

const router = Router();

router.post('/auth/register', async (req, res) => {
  // TODO: Data Validation
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const userFound = await prisma.user.findUniqueOrThrow({
    where: { email: user.email },
  });
  console.log('userFound=====>', userFound);
});

router.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ data: users });
});

router.get('/test', (req, res) => {
  res.send('<h1>server response</h1>');
});

export default router;
