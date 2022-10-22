import { Injectable } from '@nestjs/common';
import { Order, Food } from './app.interface';
import { Model } from 'mongoose';
import { ORDER_MODEL } from 'constant';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AppService {
  constructor(
    @InjectModel(ORDER_MODEL) private readonly orderModel: Model<Order>,
  ) {}
  async getAllOrders() {
    const allOrders = await this.orderModel.find().exec();
    if (!allOrders) {
      throw new Error('orders were not found');
    }

    return allOrders;
}
}
