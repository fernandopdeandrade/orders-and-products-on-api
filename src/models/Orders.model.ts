import { Pool } from 'mysql2/promise';
import Order from '../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAllModelOrders(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.user_id as userId, 
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o 
      INNER JOIN Trybesmith.products as p 
      ON o.id = p.order_id GROUP BY o.id`,
    );
    const [rows] = result;
    return rows as Order[];
  }
}