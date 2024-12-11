import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { taskRouter } from './task-routes.js';

const router = Router();

router.use('/tickets', ticketRouter);
router.use('/users', userRouter);
router.use('/tasks', taskRouter);

export default router;
