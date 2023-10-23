import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { IUser } from '../models/user.model';
import statusCodes from '../utils/statusCodes';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const userExists = await this.userService.checkUserExists(email);

      if (userExists) {
        res.status(statusCodes.BAD_REQUEST).json({ error: 'Email already exists' });
      } else {
        const newUser = await this.userService.createUser(name, email, password);

        res.status(statusCodes.CREATED).json(newUser);
      }
    } catch (error) {
      res.status(statusCodes.BAD_REQUEST).json({ error: 'Error creating user.' });
    }
  }

  async listUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users: IUser[] = await this.userService.listUsers();
      res.status(statusCodes.OK).json(users);
    } catch (error) {
      res
        .status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Error fetching tasks.' });
    }
  }
}

export default UserController;
