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

  // @Delete('section/:id/:name')
  async deleteSection(sectionId: string, removeSection: string) {
    // Recover the section and update foods DB and return boolean as well to confirm modifications
    const removeSelectedSection = await this.sectionModel
      .deleteOne({ _id: sectionId })
      .exec();
    const removeFoods = await this.foodModel.deleteMany({
      section: removeSection,
    });
    console.log('a section was removed');
    console.log('removedsection', removeSelectedSection);
    console.log('removedFoods', removeFoods);
    return 'done';
  }

  // @Delete('section/:id/extra/:extra')
  async deleteExtra(sectionId: string, removeExtra: string) {
    const foundSection = await this.sectionModel.findById(sectionId).exec();
    console.log('bef', foundSection.extra);
    const modifiedExtra = foundSection.extra.filter(
      (oneextra) => oneextra !== removeExtra,
    );
    console.log('modif', modifiedExtra);
    const data = {
      name: foundSection.name,
      extra: modifiedExtra,
    };
    const deleteFoods = await this.foodModel
      .deleteMany({ extra: removeExtra })
      .exec();
    const updatedSection = await this.sectionModel.findByIdAndUpdate(
      sectionId,
      data,
    );
    return 'done';
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
  async updateFood(dto: Food) {
    console.log('patch was done');
    const updateFood = await this.foodModel.findByIdAndUpdate(dto._id, dto);
    return updateFood;
  }

  // @Post('create')
  async createFood(dto: Food) {
    console.log('entered in the loop');
    const newFood = await this.foodModel.create(dto);
    console.log('create a food was done', newFood);
    return newFood;
  }

  // @Post('section')
  async createSection(dto) {
    const addNewSection = await this.sectionModel.create(dto);
    return addNewSection;
  }

  async createExtra(newExtra: string, targetedSection: Section) {
    const prevSection = { ...targetedSection };
    prevSection.extra.push(newExtra);
    console.log('prev', prevSection);
    const addExtraToDB = await this.sectionModel.findByIdAndUpdate(
      targetedSection._id,
      {
        name: prevSection.name,
        extra: prevSection.extra,
      },
    );
    return 'done';
  }
}
