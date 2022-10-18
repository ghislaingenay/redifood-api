import { Controller, Get } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  getPaidOrders(): { val: string } {
    return this.historyService.getPaidOrders();
  }
}
