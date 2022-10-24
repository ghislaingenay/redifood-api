import { Module } from '@nestjs/common';
import { FoodsController } from 'src/foods/foods.controller';
import { FoodsService } from 'src/foods/foods.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SECTION_MODEL } from 'constant';
import { SectionSchema } from 'src/schemas/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SECTION_MODEL, schema: SectionSchema }]),
  ],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class SectionsModule {}
