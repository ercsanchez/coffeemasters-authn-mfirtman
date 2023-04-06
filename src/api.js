import express from 'express';
// import cors from 'cors';

import router from './routes/router.js';

const app = express();

const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('<h1>server is running...</h1>');
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
