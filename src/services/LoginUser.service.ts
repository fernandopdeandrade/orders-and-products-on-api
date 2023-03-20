import LoginUser from '../interfaces/LoginUser.interface';
import LoginUserModel from '../models/LoginUser.model';
import connection from '../models/connection';

class LoginUserService {
  public model: LoginUserModel;

  constructor() {
    this.model = new LoginUserModel(connection);
  }

  public async loginUserService(user: LoginUser): Promise<LoginUser> {
    const logeedUser = await this.model.loginUserModel(user);
    return logeedUser as LoginUser;
  }
}

export default LoginUserService;
