import { Injectable } from '@nestjs/common';
import { foods as foundFoods, section as allSection } from '../data';
import { Food } from 'src/app.interface';

@Injectable()
export class FoodsService {
  // Recover foods and section to render in the page
  // @Get('foods')
  recoverFoodAndSection() {
    console.log('recover all data');
    // Find everything in DB and return it
    return {
      foods: foundFoods,
      section: allSection,
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
    console.log('deletesection', removeExtra);
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
    return dto;
  }

  // @Post('create')
  createFood(dto: Food) {
    console.log('create a food was done');
    return dto;
  }
}
