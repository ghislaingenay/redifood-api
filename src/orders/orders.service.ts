import { Injectable } from '@nestjs/common';
import {
  foods as foundFoods,
  ordersData,
  section as allSection,
} from '../data';
import { Order } from 'src/app.interface';

@Injectable()
export class OrdersService {
  // @Get("/orders/create")
  recoverFoodAndSection() {
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Get("/orders/:id")
  recoverOneOrder(id: string): Order {
    console.log(id);
    return ordersData[0];
  }

  //@ Post('orders/create')
  createOrder(dto) {
    // Recover the data and add in DB, if error connection, throw error, otherwise return the orders with id and redirect in FE
    return {
      _id: '',
      table: dto.table,
      paid: dto.paid,
      total: dto.total,
      menu: dto.menu,
      payment: dto.payment,
    };
  }

  // @Patch("/orders/:id/edit")
  updateOrder(dto) {
    // const order = await this.orderModel.findByIdAndUpdate(dto._id, dto)
    // const updatedOrder = {...order}
    const state = {
      payment: '',
      table: 5,
      paid: false,
      _id: '3',
      menu: [],
      total: 5,
    };
    // findByIdAndUpdate system, throw error if not found, return boolean or something to confirm the change
    return {
      ...state,
      dto,
    };
  }
}
