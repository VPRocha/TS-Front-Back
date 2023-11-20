import express from 'express';

// controllers
import { create } from '../controllers/User'

const router = express.Router();

// Todas as rotas user
router.post('/create', create)

export default router