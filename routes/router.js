import { Router } from 'express';

const router = Router();

router.get('/test', (req, res) => {
  res.send('<h1>server response</h1>');
});

export default router;
