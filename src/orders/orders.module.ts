import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FOOD_MODEL, ORDER_MODEL, SECTION_MODEL } from 'constant';
import { OrderSchema } from 'src/schemas/orders.schema';
import { FoodSchema } from 'src/schemas/foods.schema';
import { SectionSchema } from 'src/schemas/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ORDER_MODEL, schema: OrderSchema },
      { name: FOOD_MODEL, schema: FoodSchema },
      { name: SECTION_MODEL, schema: SectionSchema },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
