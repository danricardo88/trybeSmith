import express from 'express';
import orderRouter from './routers/orderRouter';
import prodRouter from './routers/prodRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());

app.use(prodRouter);
app.use(userRouter);
app.use(orderRouter);

export default app;
