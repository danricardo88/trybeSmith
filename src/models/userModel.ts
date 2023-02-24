import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import User from '../types/user';
import UserName from '../types/getUserName';

const getUserName = async (user: UserName): Promise<UserName> => {
  const { username } = user;
  const [[info]] = await connection.execute<(
  UserName & RowDataPacket)[]>(
    'SELECT username, password FROM Trybesmith.users WHERE username=?',
    [username],
    );
  return info;
};

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
  getUserName,
};