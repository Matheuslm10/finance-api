import express from 'express';

import registerRouter from '../../commons/registerRouter';

import getAll from './controllers/getAll';

const router = express.Router();

router.get('/', getAll);

const bindRoutesToApp = registerRouter({
  domain: '/buckets',
  router
});

export default bindRoutesToApp;