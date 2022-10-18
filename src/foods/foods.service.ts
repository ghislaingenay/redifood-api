import { Injectable } from '@nestjs/common';
import { foods as foundFoods, section as allSection } from '../data';

@Injectable()
export class FoodsService {
  // Recover foods and section to render in the page
  // @Get('foods')
  recoverFoodAndSection() {
    console.log('rec');
    // Find everything in DB and return it
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Delete('delete/section')
  deleteSection(removeSection: string) {
    // Recover the section and update foods DB and return boolean as well to confirm modifications
    console.log('deletesection', removeSection);
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  // @Delete('delete/extra')
  deleteExtra(removeExtra: string) {
    // Recover the extra and update foods DB and return boolean as well to confirm modifications
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
}
