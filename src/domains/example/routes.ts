import express from 'express';

import getAll from './controllers/getAll';
import post from './controllers/post';

const router = express.Router();

router.get("/", getAll);
router.post("/", post);

export default router;