import express from 'express';
import prodRouter from './routers/prodRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use(prodRouter);
app.use(userRouter);

export default app;
