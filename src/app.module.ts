import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { HistoryModule } from './history/history.module';
import { ProfileModule } from './profile/profile.module';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [OrdersModule, HistoryModule, ProfileModule, FoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
