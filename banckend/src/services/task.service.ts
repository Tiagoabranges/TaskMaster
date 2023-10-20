import TaskModel, { ITask } from '../models/task.model';

class TaskService {
  async createTask(title: string, description: string): Promise<ITask> {
    const newTask = new TaskModel({ title, description });
    return newTask.save();
  }

  async listTasks(): Promise<ITask[]> {
    return TaskModel.find();
  }
  async getTaskById(taskId: string): Promise<ITask | null> {
    try {
      return TaskModel.findById(taskId).exec();
    } catch (error) {
      throw error;
    }
  }

  async updateTaskById(
    taskId: string,
    title: string,
    description: string,
  ): Promise<ITask | null> {
    try {
      return TaskModel.findByIdAndUpdate(
        taskId,
        { title, description },
        { new: true },
      ).exec();
    } catch (error) {
      throw error;
    }
  }

  async deleteTaskById(taskId: string): Promise<ITask | null> {
    try {
      return TaskModel.findByIdAndDelete(taskId).exec();
    } catch (error) {
      throw error;
    }
  }
}

export default TaskService;
