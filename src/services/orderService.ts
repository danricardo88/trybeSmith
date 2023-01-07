import orderModel from '../models/orderModel';
import Order from '../types/order';

const getAll = async (): Promise<Order[]> => {
  const o = await orderModel.getAll();
  return o;
};

export default {
  getAll,
};