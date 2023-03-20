import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import LoginUserService from '../services/LoginUser.service';
import { createToken } from '../auth/auth.jwt';

export default class LoginUserController {
  constructor(private loginUserService = new LoginUserService()) { }

  public login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const result = await this.loginUserService.loginUserService(
        { username, password },
      );
      if (!result || result.length === 0) {
        return res.status(statusCodes.UNAUTHORIZED).json(
          { message: 'Username or password invalid' },
        );
      }
      const id = result[0]?.id;
      const token = await createToken({ id, username });
      return res.status(statusCodes.OK).json({ token: token.toString() });
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  };
}
