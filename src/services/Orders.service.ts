import Order from '../interfaces/Order.interface';
import OrderModel from '../models/Orders.model';
import connection from '../models/connection';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async findAllServiceOrders(): Promise<Order[]> {
    const orders = await this.model.findAllModelOrders();
    return orders;
  }
}

export default OrderService;
