import { RowDataPacket } from 'mysql2';
import Order from '../types/order';
import connection from './connection';

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection.execute<(Order & RowDataPacket)[]>(
    `SELECT
    O.id,
    O.user_id as userId,
    JSON_ARRAYAGG(P.id) as productsIds
  FROM
    Trybesmith.orders AS O
    INNER JOIN Trybesmith.products AS P
      ON O.id = P.order_id
  GROUP BY
    O.id`);
  
  return orders;
};

export default {
  getAll,
};