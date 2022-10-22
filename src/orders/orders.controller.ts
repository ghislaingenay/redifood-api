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

  @Get(':id/edit')
  async getOneOrder(@Param('id') orderId: string): Promise<{
    allfoods: Food[];
    allsection: Section[];
    editOrder: Order;
    totalPrice: number;
  }> {
    return await this.ordersService.getOneOrder(orderId);
  }
  // Test id: AVGVHB5373DHUDFBHSCC
  @Get(':id')
  recoverOneOrder(@Param('id') orderId: string): Order {
    return this.ordersService.recoverOneOrder(orderId);
  }


  @Post()
  async createOrder(
    @Body('paid') orderPaid: boolean,
    @Body('total') orderTotal: number,
    @Body('table') orderTable: number,
    @Body('menu') orderMenu: Menu[],
    @Body('payment') orderPayment: string,
    @Body('date') orderDate: Date,
  ): Promise<Order> {
    const dto = {
      paid: orderPaid,
      total: orderTotal,
      table: orderTable,
      menu: orderMenu,
      payment: orderPayment,
      date: orderDate,
    };
    return await this.ordersService.createOrder(dto);
  }

  @Patch(':id/edit')
  async updateOrder(
    @Param('id') orderId: string,
    @Body('paid') orderPaid: boolean,
    @Body('total') orderTotal: number,
    @Body('table') orderTable: number,
    @Body('menu') orderMenu: Menu[],
    @Body('payment') orderPayment: string,
    @Body('date') orderDate: Date,
  ): Promise<Order> {
    const dto = {
      paid: orderPaid,
      total: orderTotal,
      table: orderTable,
      menu: orderMenu,
      payment: orderPayment,
      date: orderDate,
    };
    return await this.ordersService.updateOrder(dto, orderId);
  }
}
