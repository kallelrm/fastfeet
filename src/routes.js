import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.get('/users', UserController.store);

routes.post('/recipients', RecipientController.store);
routes.post('/sessions', SessionController.store);

export default routes;
