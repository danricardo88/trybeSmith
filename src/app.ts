import express from 'express';
import prodRouter from './routers/prodRouter';

const app = express();

app.use(express.json());

app.use(prodRouter);

export default app;
