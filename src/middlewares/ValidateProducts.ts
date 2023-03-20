import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

const ValidateProducts = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { name } } = req;
  if (!name) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  } if (name.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"name" length must be at least 3 characters long' },
    );
  } if (typeof name !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"name" must be a string' },
    );
  }
  
  next();
};

const ValidateMount = async (req: Request, res: Response, next: NextFunction) => {
  const { body: { amount } } = req;
  if (!amount) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  } if (amount.length < 3) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"amount" length must be at least 3 characters long' },
    );
  } if (typeof amount !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"amount" must be a string' },
    );
  }
  next();
};

export { ValidateProducts, ValidateMount };
