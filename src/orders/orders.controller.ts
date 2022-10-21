import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { Food, Section, Order, Menu } from 'src/app.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('create')
  async recoverFoodAndSection(): Promise<{
    foods: Food[];
    section: Section[];
    orders: Order[];
  }> {
    return await this.ordersService.recoverFoodAndSection();
  }

  // Test id: AVGVHB5373DHUDFBHSCC
  @Get(':id')
  async recoverOneOrder(@Param('id') orderId: string): Promise<{
    foods: Food[];
    section: Section[];
    order: Order;
  }> {
    return await this.ordersService.recoverOneOrder(orderId);
  }

  @Get(':id/edit')
  getOneOrder(@Param('id') orderId: string): void {
    return this.ordersService.getOneOrder(orderId);
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
  updateOrder(
    @Param('id') orderId: string,
    @Body('paid') orderPaid: boolean,
    @Body('total') orderTotal: number,
    @Body('table') orderTable: number,
    @Body('menu') orderMenu: Menu[],
    @Body('payment') orderPayment: string,
    @Body('date') orderDate: Date,
  ): void {
    const dto = {
      paid: orderPaid,
      total: orderTotal,
      table: orderTable,
      menu: orderMenu,
      payment: orderPayment,
      date: orderDate,
    };
    return this.ordersService.updateOrder(dto, orderId);
  }
}
