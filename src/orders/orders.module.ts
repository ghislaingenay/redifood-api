import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ORDER_MODEL } from 'constant';
import { OrderSchema } from 'src/schemas/orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ORDER_MODEL, schema: OrderSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
