import { Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';
import { Order } from 'src/app.interface';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  async getPaidOrders(): Promise<Order[]> {
    return await this.historyService.getPaidOrders();
  }
}
