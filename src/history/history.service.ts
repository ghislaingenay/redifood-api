import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ORDER_MODEL } from 'constant';
import { Model } from 'mongoose';
import { Order } from 'src/app.interface';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(ORDER_MODEL) private readonly orderModel: Model<Order>,
  ) {}

  // @Get('history')
  async getPaidOrders() {
    const allPaidOrders = await this.orderModel.find({ paid: true }).exec();
    console.log('paid', allPaidOrders);
    return allPaidOrders;
  }
}
