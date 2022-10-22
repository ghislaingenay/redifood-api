import { Controller, Get } from '@nestjs/common';
import { Order } from './app.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return await this.appService.getAllOrders();
  }
}
