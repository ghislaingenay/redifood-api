import { Controller, Get } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { Food, Section } from 'src/app.interface';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  recoverFoodAndSection(): { foods: Food[]; section: Section[] } {
    return this.foodsService.recoverFoodAndSection();
  }

}