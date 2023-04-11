import { Router } from 'express';
// import multer from 'multer';
// import multerConfig from './config/multer';

// import NotificationController from './app/controllers/NotificationController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// const upload = multer(multerConfig);

routes.get('/form', NotificationController.index);

export default routes;