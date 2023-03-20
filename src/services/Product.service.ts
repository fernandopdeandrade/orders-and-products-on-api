import Product from '../interfaces/Product.interface';
import ProductModel from '../models/Product.model';
import connection from '../models/connection';

class BookService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async findAllService(): Promise<Product[]> {
    const books = await this.model.findAllModel();
    return books;
  }

  public async createProductService(product: Product): Promise<Product> {
    const createdProduct = await this.model.createProduct(product);
    return createdProduct;
  }
}

export default BookService;
