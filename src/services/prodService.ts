import prodModel from '../models/prodModel';
import Product from '../types/prod';

const getAll = async () => {
  const products = await prodModel.getAll();
  return products;
};

const create = async (product: Product) => {
  const created = await prodModel.create(product);
  return created;
};

export default {
  create,
  getAll,
};