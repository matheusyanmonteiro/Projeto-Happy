import { Router } from 'express';

import OrphanagesRouter from './orphanages.routes';

const routes = Router();

routes.use('/orphanages', OrphanagesRouter);

export default routes;