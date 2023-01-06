import { Request, Response } from 'express';
import prodService from '../services/prodService';

const BAD_REQUEST = 400;
const CREATED = 201;

const create = async (request: Request, response: Response) => {
  const product = request.body;
  const created = await prodService.create(product);

  if (typeof created === 'string') {
    return response.status(BAD_REQUEST).json({ message: created });
  }
  response.status(CREATED).json(created);
};

export default {
  create,
};