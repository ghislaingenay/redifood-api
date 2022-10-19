import { Controller, Body, Get, Delete, Patch, Param, Post } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { Food, FoodAndSection } from 'src/app.interface';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  recoverFoodAndSection(): FoodAndSection {
    return this.foodsService.recoverFoodAndSection();
  }

  @Delete('section')
  deleteSection(@Body('deleteSection') removeSection: string): FoodAndSection {
    return this.foodsService.deleteSection(removeSection);
  }

  // Delete one section from the FE and update DB of foods as well
  @Delete('extra')
  deleteExtra(@Body('deleteExtra') removeExtra: string): FoodAndSection {
    return this.foodsService.deleteExtra(removeExtra);
  }

  //Delete a food with a specific id
  @Delete(':id/delete')
  deleteFood(@Param('id') foodId: string) {
    return this.foodsService.deleteFood(foodId);
  }

  @Patch()
  updateFood(
    @Body('_id') foodId: string,
    @Body('name') foodName: string,
    @Body('photo') foodPhoto: string,
    @Body('description') foodDescription: string,
    @Body('price') foodPrice: number,
    @Body('section') foodSection: string,
    @Body('extra') foodExtra: string,
  ): Food {
    const dto = {
      _id: foodId,
      name: foodName,
      photo: foodPhoto,
      description: foodDescription,
      price: foodPrice,
      section: foodSection,
      extra: foodExtra,
    };
    return this.foodsService.updateFood(dto);
  }

  @Post('create')
  createFood(
    @Body('_id') foodId: string,
    @Body('name') foodName: string,
    @Body('photo') foodPhoto: string,
    @Body('description') foodDescription: string,
    @Body('price') foodPrice: number,
    @Body('section') foodSection: string,
    @Body('extra') foodExtra: string,
  ): Food {
    const dto = {
      _id: foodId,
      name: foodName,
      photo: foodPhoto,
      description: foodDescription,
      price: foodPrice,
      section: foodSection,
      extra: foodExtra,
    };
    return this.foodsService.createFood(dto);
  }
}