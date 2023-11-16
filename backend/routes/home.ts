import express from 'express';

// controllers
import { index } from '../controllers/Home'

const router = express.Router();

router.get('/', index)

export default router