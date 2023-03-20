import { Request, Response } from 'express';
import statusCodes from '../statusCodes';   
import OrderService from '../services/Orders.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }
    
  public findAllControllerOrders = async (req: Request, res: Response) => {
    try {
      const result = await this.orderService.findAllServiceOrders();
      return res.status(statusCodes.OK).json(result);
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  };
}
