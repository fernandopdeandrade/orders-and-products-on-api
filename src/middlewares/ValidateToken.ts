import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/auth.jwt';
import statusCodes from '../statusCodes';

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { headers: { authorization } } = req;
    if (!authorization) {
      return res.status(statusCodes.UNAUTHORIZED).json({ error: 'Token not found' });
    }
    const decodedToken = await verifyToken(authorization as string);
    console.log('sou o decodedToken do ValidateToken', decodedToken);
    next();
  } catch (error) {
    return res.status(statusCodes.UNAUTHORIZED).json({ error });
  }
};

export default validateToken;
