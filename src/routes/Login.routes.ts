import { Router } from 'express';
import LoginUserController from '../controllers/LoginUser.controller';
import ValidateLogin from '../middlewares/ValidateLogin';

const loginUserController = new LoginUserController();

const LoginRoutes = Router();

LoginRoutes.post('/', ValidateLogin, loginUserController.login);

export default LoginRoutes;
