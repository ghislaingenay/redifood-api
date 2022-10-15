import { Controller, Get, Param } from '@nestjs/common';
import { Food, Section, Order } from 'src/app.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('create')
  recoverFoodAndSection(): { foods: Food[]; section: Section[] } {
    return this.ordersService.recoverFoodAndSection();
  }

  @Get(':id')
  recoverOneOrder(@Param('id') orderId: string): Order {
    return this.ordersService.recoverOneOrder(orderId);
  }

}
