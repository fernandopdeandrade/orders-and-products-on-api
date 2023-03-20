import { Pool, ResultSetHeader } from 'mysql2/promise';
import LoginUser from '../interfaces/LoginUser.interface';

export default class LoginUserModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async loginUserModel(user: LoginUser): Promise<unknown> {
    const { username, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    return result;
  }
}
