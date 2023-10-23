import { Request, Response } from 'express';
import TaskService from '../services/task.service';
import { ITask } from '../models/task.model';
import statusCodes from '../utils/statusCodes';

class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const { title, description } = req.body;
      const newTask: ITask = await this.taskService.createTask(title, description);
      res.status(statusCodes.CREATED).json(newTask);
    } catch (error) {
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Error creating the task.' });
    }
  }

  async listTasks(_req: Request, res: Response): Promise<void> {
    try {
      const tasks: ITask[] = await this.taskService.listTasks();
      res.status(statusCodes.OK).json(tasks);
    } catch (error) {
      res
        .status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error fetching tasks.' });
    }
  }

  async getTaskById(req: Request, res: Response): Promise<void> {
    try {
      const taskId = req.params.id;
      const task: ITask | null = await this.taskService.getTaskById(taskId);
      if (!task) {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Task not found.' });
      } else {
        res.status(statusCodes.OK).json(task);
      }
    } catch (error) {
      res
        .status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error fetching the task.' });
    }
  }

  async updateTaskById(req: Request, res: Response): Promise<void> {
    try {
      const taskId = req.params.id;
      const { title, description } = req.body;
      const updatedTask: ITask | null = await this.taskService.updateTaskById(
        taskId,
        title,
        description,
      );
      if (!updatedTask) {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Task not found.' });
      } else {
        res.status(statusCodes.OK).json(updatedTask);
      }
    } catch (error) {
      res
        .status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error updating the task.' });
    }
  }

  async deleteTaskById(req: Request, res: Response): Promise<void> {
    try {
      const taskId = req.params.id;
      const deletedTask: ITask | null = await this.taskService.deleteTaskById(taskId);
      if (!deletedTask) {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Task not found.' });
      } else {
        res.status(statusCodes.NO_CONTENT).json({ message: 'Task deleted' });
      }
    } catch (error) {
      res
        .status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error deleting the task.' });
    }
  }
}

export default TaskController;
