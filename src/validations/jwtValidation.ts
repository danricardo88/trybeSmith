import { sign } from 'jsonwebtoken';
import User from '../types/user';
import Token from '../types/token';

const secret = process.env.JWT_SECRET as string;

const handleToken = (payload: User): Token => {
  const token = sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  return { token };
};

export default handleToken;