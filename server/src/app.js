import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import summonerRoutes from './routes/summoner';

const app = express();
const PORT = 8000;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'tiny'));

app.get('/', (req, res) => {
  return res.status(200).send('오호수');
});

app.use('/summoner', summonerRoutes);

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}/`));
