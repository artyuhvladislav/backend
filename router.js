import { Router } from 'express';
import Controller from './controller.js';
import Post from './Post.js';

const router = new Router();

router.post('/posts', Controller.create);
router.get('/posts', Controller.getAll);
router.get('/posts/:id', Controller.getOne);
router.put('/posts', Controller.update);
router.delete('/posts/:id', Controller.delete);

export default router;
