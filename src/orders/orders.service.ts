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
}
