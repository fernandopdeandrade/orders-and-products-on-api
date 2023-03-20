import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/User.service';
import { createToken } from '../auth/auth.jwt';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public registerUserController = async (req: Request, res: Response) => {
    try {
      const { username, vocation, level, password } = req.body;
      const result = await this.userService.registerUserService(
        { username, vocation, level, password },
      );
      const { id } = result;
      const token = await createToken({ id, username }); 
      return res.status(statusCodes.CREATED).json({ token });
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  };
}
