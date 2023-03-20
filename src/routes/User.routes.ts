import { Router } from 'express';
import UserController from '../controllers/User.controller';
import {
  ValidateName,
  ValidateVocation,
  ValidateLevel,
  ValidatePassword,
} from '../middlewares/ValidateUser';

const userController = new UserController();

const UserRoutes = Router();

UserRoutes.post(
  '/',
  ValidateName,
  ValidateVocation,
  ValidateLevel,
  ValidatePassword,
  userController.registerUserController,
);    

export default UserRoutes;
