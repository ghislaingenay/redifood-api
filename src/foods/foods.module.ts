import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FOOD_MODEL, SECTION_MODEL } from 'constant';
import { FoodSchema } from 'src/schemas/foods.schema';
import { SectionSchema } from 'src/schemas/section.schema';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FOOD_MODEL, schema: FoodSchema },
      { name: SECTION_MODEL, schema: SectionSchema },
    ]),
  ],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
