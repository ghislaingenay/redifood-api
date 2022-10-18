import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
  // @Get('history')
  getPaidOrders() {
    console.log('kk');
    return {
      val: 'kk',
    };
    // findAllOrders and filter them by paid === true
    // And then filter them
    // if (paymentChoice !== '') {
    // Apply one filter
    // }
    // if (ordersDateFrom !== '') {
    // Apply one filter
    // }
    // if (ordersDateTo !== '') {
    // Apply one filter
    // }
    // Then return to users what it's left. Create a copy with spread operator and send back to user
  }
}
