import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ORDER_MODEL } from 'constant';
import { Model } from 'mongoose';
import { Order } from 'src/app.interface';
import axios from 'axios';
import * as moment from 'moment';

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
    // const changeOrder = await this.orderModel.findByIdAndUpdate(orderId, dto);
    const today = new Date();
    const dataForApi = {
      orderId: dto.id,
      paid: dto.paid,
      total: dto.total,
      payment: dto.payment,
      date: moment(today).format('L'),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
    };

    const { statusText } = await axios.post(
      String(process.env.SHEETY_API),
      { history: dataForApi },
      {
        headers: {
          Authorization: String(`Bearer ${process.env.SHEETY_TOKEN}`),
        },
      },
    );
    if (statusText !== 'OK') {
      throw new Error('data not recovered in Google Sheet');
    }
    return dto;
  }
}
