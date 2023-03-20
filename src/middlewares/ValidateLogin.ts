import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

const ValidateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  } if (!password) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  } if (username.length === 0 || password.length === 0) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  }
  next();
};

export default ValidateLogin;
