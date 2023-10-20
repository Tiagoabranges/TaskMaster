import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const newUser = await this.userService.createUser(name, email, password);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Error creating user.' });
    }
  }
}

export default UserController;
