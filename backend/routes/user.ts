import express from 'express';

// controllers
import { create } from '../controllers/User'

// Validator
import { userCreateValidate } from '../validations/user';

const router = express.Router();

// Todas as rotas user
router.post('/create', userCreateValidate, create);


export default router