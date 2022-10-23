import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ORDER_MODEL } from 'constant';
import { Model } from 'mongoose';
import { Order } from 'src/app.interface';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(ORDER_MODEL) private readonly orderModel: Model<Order>,
  ) {}
  // @Get(':id')
  async recoverPaidOrder(orderId) {
    console.log('id reco', orderId);
    const findOrder = this.orderModel.findById(orderId).exec();
    return findOrder;
  }

  // @Patch(':id')
  async setPaidOrder(orderId, dto) {
    const changeOrder = await this.orderModel.findByIdAndUpdate(orderId, dto);
    return changeOrder;
  }
}
