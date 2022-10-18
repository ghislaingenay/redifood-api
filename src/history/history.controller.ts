import { Controller, Body, Get } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  getPaidOrders(
    @Body('search') paymentChoice: string,
    @Body('datefrom') ordersDateFrom: string,
    @Body('dateto') ordersDateTo: string,
  ) : void {
    return this.historyService.getPaidOrders(paymentChoice, ordersDateFrom, ordersDateTo);
  }
}
