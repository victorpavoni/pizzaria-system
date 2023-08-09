import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';

import router from './routes';
import isAuthenticated from './middlewares/isAuthenticated';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(
  '/files',
  isAuthenticated,
  express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  })
})

app.listen(3333, () => console.log('http://localhost:3333'));
