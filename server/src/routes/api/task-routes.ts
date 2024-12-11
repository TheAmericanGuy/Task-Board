import express from 'express';
const router = express.Router();


router.get('/', (_req, res) => {
const tasks = [
    { id: 1, name: 'Tarefa 1', status: 'To Do' },
    { id: 2, name: 'Tarefa 2', status: 'In Progress' }
];
res.json(tasks);
});

export { router as taskRouter };
