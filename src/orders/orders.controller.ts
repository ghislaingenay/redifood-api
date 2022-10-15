import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { OrderDto } from 'src/app.dto';
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

  @Post('create')
  createOrder(@Body() dto: OrderDto): Order {
    return this.ordersService.createOrder(dto);
  }

  @Patch(':id/edit')
  updateOrder(@Body() dto: OrderDto): Order {
    return this.ordersService.updateOrder(dto);
  }
}
