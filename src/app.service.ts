import { Injectable } from '@nestjs/common';
import { Order } from './app.interface';
import { ordersData } from './data';

@Injectable()
export class AppService {
  getAllOrders(): Order[] | [] {
    return ordersData;
  }
}
