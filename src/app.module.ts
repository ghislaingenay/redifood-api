import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { HistoryModule } from './history/history.module';
import { ProfileModule } from './profile/profile.module';
import { FoodsModule } from './foods/foods.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ORDER_MODEL } from 'constant';
import { OrderSchema } from './schemas/orders.schema';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    OrdersModule,
    HistoryModule,
    ProfileModule,
    FoodsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MongooseModule.forFeature([{ name: ORDER_MODEL, schema: OrderSchema }]),
    PaymentModule,
    AuthModule,
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
