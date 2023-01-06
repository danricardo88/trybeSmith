import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../types/prod';
import connection from './connection';

const getAll = async () => {
  const [products] = await connection.execute<(Product & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.products');
  return products as Product[];
};

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId } = result;
  return { id: insertId, ...product };
};

export default {
  create,
  getAll,
};