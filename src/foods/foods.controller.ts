import {
  Controller,
  Body,
  Get,
  Delete,
  Patch,
  Param,
  Post,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { Food, FoodAndSection, Section } from 'src/app.interface';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  async recoverFoodAndSection(): Promise<FoodAndSection> {
    return await this.foodsService.recoverFoodAndSection();
  }

  @Delete('section/:id/:name')
  async deleteSection(
    @Param('id') sectionId: string,
    @Param('name') removeSection: string,
): Promise<string> {
    return await this.foodsService.deleteSection(sectionId, removeSection);
  }

  // Delete one section from the FE and update DB of foods as well
  @Delete('section/:id/extra/:extra')
  async deleteExtra(
    @Param('id') sectionId: string,
    @Param('extra') removeExtra: string,
  ): Promise<string> {
    return await this.foodsService.deleteExtra(sectionId, removeExtra);
  }

  //Delete a food with a specific id
  @Delete(':id/delete')
  deleteFood(@Param('id') foodId: string) {
    return this.foodsService.deleteFood(foodId);
  }

  @Patch()
  async updateFood(
    @Body('_id') foodId: string,
    @Body('name') foodName: string,
    @Body('photo') foodPhoto: string,
    @Body('description') foodDescription: string,
    @Body('price') foodPrice: number,
    @Body('section') foodSection: string,
    @Body('extra') foodExtra: string,
  ): Promise<Food> {
    const dto = {
      _id: foodId,
      name: foodName,
      photo: foodPhoto,
      description: foodDescription,
      price: foodPrice,
      section: foodSection,
      extra: foodExtra,
    };
    return await this.foodsService.updateFood(dto);
  }

  @Post('create')
  async createFood(
    @Body('name') foodName: string,
    @Body('photo') foodPhoto: string,
    @Body('description') foodDescription: string,
    @Body('price') foodPrice: number,
    @Body('section') foodSection: string,
    @Body('extra') foodExtra: string,
  ): Promise<Food> {
    const dto = {
      name: foodName,
      photo: foodPhoto,
      description: foodDescription,
      price: foodPrice,
      section: foodSection,
      extra: foodExtra,
    };
    return await this.foodsService.createFood(dto);
  }

  @Post('section')
  async createSection(
    @Body('name') sectionName: string,
    @Body('extra') sectionExtra: string[] | [],
  ): Promise<Section> {
    const dto = {
      name: sectionName,
      extra: sectionExtra,
    };
    return await this.foodsService.createSection(dto);
  }

  @Post('extra')
  async createExtra(
    @Body('addedExtra') newExtra: string,
    @Body('foundSection') targetedSection: Section,
  ) : Promise<string> {
    return await this.foodsService.createExtra(newExtra, targetedSection);
  }
}
