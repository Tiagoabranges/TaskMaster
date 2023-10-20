import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(1).nonempty(),
  description: z.string().nonempty().optional(),
});

export function validateTaskData(req: Request, res: Response, next: NextFunction) {
  const { title, description } = req.body;

  try {
    taskSchema.parse({ title, description });
    next();
  } catch {
    console.error('Invalid data.');
    res.status(400).json({ error: 'Invalid data.' });
  }
}
