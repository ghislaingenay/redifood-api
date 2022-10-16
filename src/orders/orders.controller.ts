import { Body, Controller, Get, Param, Post, Patch, Req } from '@nestjs/common';
import { OrderDto } from 'src/app.dto';
import { Food, Section, Order, Menu } from 'src/app.interface';
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

  @Post()
  createOrder(
    @Body('paid') orderPaid: boolean,
    @Body('total') orderTotal: number,
    @Body('table') orderTable: number,
    @Body('menu') orderMenu: Menu[],
    @Body('payment') orderPayment: string,
    @Body('date') orderDate: Date,
  ): { test: Order } {
    const dto = {
      paid: orderPaid,
      total: orderTotal,
      table: orderTable,
      menu: orderMenu,
      payment: orderPayment,
      date: orderDate,
    };
    return this.ordersService.createOrder(dto);
  }

  @Patch(':id/edit')
  updateOrder(): void {
    return this.ordersService.updateOrder();
  }
}
