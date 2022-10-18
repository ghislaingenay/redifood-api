import { Controller, Body, Get, Delete, Param } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { Food, Section } from 'src/app.interface';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  recoverFoodAndSection(): { foods: Food[]; section: Section[] } {
    return this.foodsService.recoverFoodAndSection();
  }

  @Delete('delete/section')
  deleteSection(@Body('deleteSection') removeSection: string): {
    foods: Food[];
    section: Section[];
  } {
    return this.foodsService.deleteSection(removeSection);
  }

  // Delete one section from the FE and update DB of foods as well
  @Delete('delete/extra')
  deleteExtra(@Body('deleteExtra') removeExtra: string): {
    foods: Food[];
    section: Section[];
  } {
    return this.foodsService.deleteExtra(removeExtra);
  }

  //Delete a food with a specific id
  @Delete(':id/delete')
  deleteFood(@Param('id') foodId: string) {
    return this.foodsService.deleteFood(foodId);
  }

}