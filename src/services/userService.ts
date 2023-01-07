import userModel from '../models/userModel';
import User from '../types/user';
import Token from '../types/token';
import handleToken from '../validations/jwtValidation';
// import connection from '../models/connection';

const create = async (user: User): Promise<Token> => {
  const created = await userModel.create(user);
  const generatorToken = handleToken(created); 
  return generatorToken;
};

export default {
  create,
};