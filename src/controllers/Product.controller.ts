import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/Product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public findAllController = async (req: Request, res: Response) => {
    try {
      const result = await this.productService.findAllService();
      return res.status(statusCodes.OK).json(result);
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  };

  public createProductController = async (req: Request, res: Response) => {
    try {
      const { name, amount } = req.body;
      const result = await this.productService.createProductService({ name, amount });
      return res.status(statusCodes.CREATED).json(result);
    } catch (error) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error });
    }
  };
}
