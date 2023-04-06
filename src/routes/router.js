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
  console.log('user======>', user);

  const userFound = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!userFound) {
    const result = await prisma.user.create({ data: user });
    console.log('result===>', result);
    res.json({ message: 'user registered...' });
  }

  console.log('userFound=====>', userFound);
  res.json({ message: 'email already exists...' });

  // if (userFound) {
  //   // res.send({ ok: true });
  //   return res.json({ message: 'successfully registered...' });
  //   // return;
  // }
});

router.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ data: users });
});

router.get('/test', (req, res) => {
  res.send('<h1>server response</h1>');
});

export default router;
