import { Router } from 'express';
import personRouter from './person.routes';

const routes = Router();

routes.use('/person', personRouter);

export default routes;
