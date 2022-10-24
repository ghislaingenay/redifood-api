import { Injectable } from '@nestjs/common';
import { foods as foundFoods, section as allSection } from '../data';
import { Food, Section } from 'src/app.interface';
import { InjectModel } from '@nestjs/mongoose';
import { FOOD_MODEL, SECTION_MODEL } from 'constant';
import { Model } from 'mongoose';

@Injectable()
export class FoodsService {
  constructor(
    @InjectModel(FOOD_MODEL) private readonly foodModel: Model<Food>,
    @InjectModel(SECTION_MODEL) private readonly sectionModel: Model<Section>,
  ) {}
  // Recover foods and section to render in the page
  // @Get('foods')
  async recoverFoodAndSection() {
    const allFoods = await this.foodModel.find().exec();
    const completeSection = await this.sectionModel.find().exec();
    console.log('sectiondata', completeSection);
    console.log('recover all data');

    return {
      foods: allFoods,
      section: completeSection,
    };
  }

  // @Delete('delete/section')
  deleteSection(removeSection: string) {
    // Recover the section and update foods DB and return boolean as well to confirm modifications
    console.log('a section was removed');
    console.log('deletesection', removeSection);
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Delete('delete/extra')
  deleteExtra(removeExtra: string) {
    // Recover the extra and update foods DB and return boolean as well to confirm modifications
    console.log('an extra was removed');
    console.log('deleteextra', removeExtra.toLowerCase());
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Delete(':id/delete')
  deleteFood(foodId: string) {
    // Find DB of food findByIdAndDelete and update the state
    console.log('delete food id', foodId);
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Patch('')
  updateFood(dto: Food) {
    console.log('patch was done');
    console.log(dto);
    return dto;
  }

  // @Post('create')
  async createFood(dto: Food) {
    console.log('entered in the loop');
    const newFood = await this.foodModel.create(dto);
    console.log('create a food was done', newFood);
    return newFood;
  }
}
