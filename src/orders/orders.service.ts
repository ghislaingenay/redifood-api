import { Injectable, NotFoundException } from '@nestjs/common';
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
    // console.log("get the root")
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Get("/orders/:id")
  recoverOneOrder(orderId: string) {
    console.log('recover-id', orderId);
    const findOrder = ordersData.find((element) => element._id === orderId);
    if (!findOrder) {
      throw new NotFoundException('no order were found with this specific id')
    }
    return findOrder;
  }

  //@ Post('orders/create')
  createOrder(dto: Order) {
    // Recover the data and add in DB, if error connection, throw error, otherwise return the orders with id and redirect in FE
    return { test: dto };
  }

  // @Patch('/orders/:id/edit')
  updateOrder(dto) {
    console.log(dto);
  }
}
