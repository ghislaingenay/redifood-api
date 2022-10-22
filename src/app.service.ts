import { Injectable } from '@nestjs/common';
import { Order, Food } from './app.interface';
import { Model } from 'mongoose';
import { FOOD_MODEL, ORDER_MODEL } from 'constant';
import { InjectModel } from '@nestjs/mongoose';
import { findFoodsIdInOrders } from 'functions';


@Injectable()
export class AppService {
  constructor(
    @InjectModel(ORDER_MODEL) private readonly orderModel: Model<Order>,
    @InjectModel(FOOD_MODEL) private readonly foodModel: Model<Food>,
  ) {}
  async getAllOrders() {
    const allOrders = await this.orderModel.find().exec();
    if (!allOrders) {
      throw new Error('orders were not found');
    }
    const allFoods = await this.foodModel.find().exec();

    const orderedList = findFoodsIdInOrders(allOrders, allFoods)
    return orderedList;
}
}
