import { body } from "express-validator";

export const userCreateValidate = [
  body('name')
  .not()
  .isEmpty()
  .withMessage('O nome é obrigatório'),
  body('email')
  .not()
  .isEmpty()
  .isEmail()
  .withMessage('O email é obrigatório'),
  body('password')
  .not()
  .isEmpty()
  .withMessage('A senha é obrigatória'),
]