import { UserModel } from '../models/user.model';

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
}

export default UserService;
