import { Router } from 'express';
import ProductController from '../controllers/Product.controller';
import {
  ValidateMount,
  ValidateProducts,
} from '../middlewares/ValidateProducts';

const productController = new ProductController();

const ProductRoutes = Router();

ProductRoutes.get('/', productController.findAllController);

ProductRoutes.post(
  '/',
  ValidateProducts,
  ValidateMount,
  productController.createProductController,
);

export default ProductRoutes;
