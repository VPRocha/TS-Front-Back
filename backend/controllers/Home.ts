import { Request, Response } from 'express';

const index = function (request: Request, response: Response) {
  response.send('Hello World! Controllers');
}

export { index }