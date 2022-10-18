import { Controller, Get } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { Food, Section } from 'src/app.interface';

@Controller('food')
export class FoodController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  recoverFoodAndSection(): { foods: Food[]; section: Section[] } {
    return this.foodsService.recoverFoodAndSection();
  }

}