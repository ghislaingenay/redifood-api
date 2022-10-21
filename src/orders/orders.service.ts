import { Injectable, NotFoundException } from '@nestjs/common';
import {
  foods as foundFoods,
  ordersData,
  section as allSection,
} from '../data';
import { Order, Food, SectionDB } from 'src/app.interface';
import { InjectModel } from '@nestjs/mongoose';
import { FOOD_MODEL, ORDER_MODEL, SECTION_MODEL } from 'constant';
import { Model } from 'mongoose';
import { convertSection } from 'functions';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(ORDER_MODEL) private readonly orderModel: Model<Order>,
    @InjectModel(FOOD_MODEL) private readonly foodModel: Model<Food>,
    @InjectModel(SECTION_MODEL) private readonly sectionModel: Model<SectionDB>,
  ) {}

  // @Get("/orders/create")
  async recoverFoodAndSection() {
    // console.log("get the root")
    const allFoods = await this.foodModel.find().exec();
    console.log('allfoods', allFoods);
    const completeSection = await this.sectionModel.find().exec();
    console.log('sectiondata', completeSection);
    console.log('recover all data');
    // console.log('sections', completeSection)
    const sectionDisplay = convertSection(completeSection);
    console.log('changeDisplay', sectionDisplay);
    const allOrders = await this.orderModel.find().exec();
    // Find everything in DB and return it
    return {
      foods: allFoods,
      section: sectionDisplay,
      orders: allOrders,
    };
  }

  // @Get(':id/edit')
  async getOneOrder(orderId: string) {
    const allFoods = await this.foodModel.find().exec();
    console.log('allfoods', allFoods);
    const completeSection = await this.sectionModel.find().exec();
    const sectionDisplay = convertSection(completeSection);
    const oneOrder = await this.orderModel.findById(orderId);
    return {
      foods: allFoods,
      section: sectionDisplay,
      orders: oneOrder,
    };
  }

  // @Get("/orders/:id")
  recoverOneOrder(orderId: string) {
    console.log('recover-id', orderId);
    const findOrder = ordersData.find((element) => element._id === orderId);
    if (!findOrder) {
      throw new NotFoundException('no order were found with this specific id');
    }
    return findOrder;
  }

  //@ Post('orders/create')
  createOrder(dto: Order) {
    console.log(dto);
    // Recover the data and add in DB, if error connection, throw error, otherwise return the orders with id and redirect in FE
    return { test: dto };
  }

  // @Patch('/orders/:id/edit')
  updateOrder(dto, orderId) {
    console.log('show id', orderId);
    console.log('show dto', dto);
  }
}
