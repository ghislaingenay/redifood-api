import { Controller, Body, Get, Param, Patch } from '@nestjs/common';
import { Order, Menu } from 'src/app.interface';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get(':id')
  async recoverPaidOrder(@Param('id') orderId: string): Promise<Order> {
    return await this.paymentService.recoverPaidOrder(orderId);
  }

  // Modify the order to set order.paid=true and the final date
  @Patch(':id')
  async setPaidOrder(
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
    return await this.paymentService.setPaidOrder(orderId, dto)
  }

}
