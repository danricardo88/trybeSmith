import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../types/user';

const create = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { ...user };
};

export default {
  create,
};