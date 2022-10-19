import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { HistoryModule } from './history/history.module';
import { ProfileModule } from './profile/profile.module';
import { FoodsModule } from './foods/foods.module';
import { FoodsController } from './foods/foods.controller';
import { FoodsService } from './foods/foods.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    OrdersModule,
    HistoryModule,
    ProfileModule,
    FoodsModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [AppController, FoodsController],
  providers: [AppService, FoodsService],
})
export class AppModule {}
