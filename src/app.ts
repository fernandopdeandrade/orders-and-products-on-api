import dotenv from 'dotenv';
import express from 'express';

import ProductRoutes from './routes/Product.routes';
import UserRoutes from './routes/User.routes';
import OrderRoutes from './routes/Order.routes';
import LoginRoutes from './routes/Login.routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/products', ProductRoutes);

app.use('/users', UserRoutes);

app.use('/orders', OrderRoutes);

app.use('/login', LoginRoutes);

export default app;
