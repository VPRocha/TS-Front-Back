import { Request, Response } from 'express';

const create = function (request: Request, response: Response) {
  response.json('created');
}

export { create }