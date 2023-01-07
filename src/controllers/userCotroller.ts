import { Request, Response } from 'express';
import userService from '../services/userService';

const CREATED = 201;

const create = async (request: Request, response: Response) => {
  const created = request.body;
  const createUser = await userService.create(created);
  
  return response.status(CREATED).json(createUser);
};

export default {
  create,
};