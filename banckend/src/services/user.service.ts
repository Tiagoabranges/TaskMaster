import { IUser, UserModel } from '../models/user.model';

class UserService {
  async createUser(name: string, email: string, password: string) {
    try {
      const newUser = new UserModel({ name, email, password });
      const user = await newUser.save();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async listUsers(): Promise<IUser[]> {
    return UserModel.find();
  }

  async checkUserExists(email: string): Promise<boolean> {
    try {
      const existingUser = await UserModel.findOne({ email });
      return !!existingUser;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
