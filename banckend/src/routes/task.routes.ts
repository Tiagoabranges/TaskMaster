import express from 'express';
import TaskController from '../controllers/task.controller';
import { validateTaskData } from '../Middlewares/validateTaskData';

const router = express.Router();
const taskController = new TaskController();

router.get('/', (req, res) => taskController.listTasks(req, res));

router.post('/', validateTaskData, (req, res) => taskController.createTask(req, res));

router.get('/edit/:id', (req, res) => taskController.getTaskById(req, res));

router.put('/:id', (req, res) => taskController.updateTaskById(req, res));

router.delete('/:id', (req, res) => taskController.deleteTaskById(req, res));

export default router;
