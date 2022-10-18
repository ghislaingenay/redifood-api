import { Injectable } from '@nestjs/common';
import { foods as foundFoods, section as allSection } from '../data';

@Injectable()
export class FoodService {
  // Recover foods and section to render in the page
  recoverFoodAndSection() {
    // Find everything in DB and return it
    return {
      foods: foundFoods,
      section: allSection,
    };
  }
}
