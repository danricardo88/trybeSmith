import { Request, Response } from 'express';
import orderService from '../services/orderService';

const OK = 200;

const getAll = async (request: Request, response: Response) => {
  const orders = await orderService.getAll();
  response.status(OK).json(orders);
};

export default {
  getAll,
};