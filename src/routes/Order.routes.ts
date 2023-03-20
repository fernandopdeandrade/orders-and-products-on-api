import { Router } from 'express';
import OrderController from '../controllers/Order.controller';

const orderController = new OrderController();

const OrderRoutes = Router();

OrderRoutes.get('/', orderController.findAllControllerOrders);

export default OrderRoutes;
