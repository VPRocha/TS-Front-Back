import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const create = function (request: Request, response: Response, next: NextFunction) {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  // Se não houver erros, envie os valores dos campos do formulário
  const { name, email, password } = request.body;
  response.json({ name, email, password });
};

export { create };