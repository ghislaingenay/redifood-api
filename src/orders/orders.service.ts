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
    // console.log("get the root")
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
    return { test: dto };
  }

  // @Patch('/orders/:id/edit')
  updateOrder() {
    // code here
  }
}
