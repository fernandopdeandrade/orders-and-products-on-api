import User from '../interfaces/User.interface';
import UserModel from '../models/Users.model';
import connection from '../models/connection';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async registerUserService(user: User): Promise<User> {
    const createdUser = await this.model.registerUserModel(user);
    return createdUser;
  }
}

export default UserService;
