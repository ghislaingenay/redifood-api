import { Injectable, NotFoundException } from '@nestjs/common';
import { Order, Food, Section } from 'src/app.interface';
import { InjectModel } from '@nestjs/mongoose';
import { FOOD_MODEL, ORDER_MODEL, SECTION_MODEL } from 'constant';
import { Model } from 'mongoose';
import { convertSection } from 'functions';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(ORDER_MODEL) private readonly orderModel: Model<Order>,
    @InjectModel(FOOD_MODEL) private readonly foodModel: Model<Food>,
    @InjectModel(SECTION_MODEL) private readonly sectionModel: Model<Section>,
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
    const allOrders = await this.orderModel.find({ paid: false }).exec();
    // Find everything in DB and return it
    return {
      foods: allFoods,
      section: completeSection,
      orders: allOrders,
    };
  }

  // @Get(':id/edit')
  async getOneOrder(orderId: string) {
    const allFoods = await this.foodModel.find().exec();
    console.log('allfoods', allFoods);
    const completeSection = await this.sectionModel.find().exec();
    const oneOrder: Order = await this.orderModel.findById(orderId);
    const total = oneOrder.menu
      .map((e) => e.food.price * e.qty)
      .reduce((t, e) => t + e);
    console.log('total', total);

    return {
      allfoods: allFoods,
      allsection: completeSection,
      editOrder: oneOrder,
      totalPrice: total,
    };
  }

  // @Get("/orders/:id")
  async recoverOneOrder(orderId: string) {
    console.log('recover-id yes', orderId);
    const findOrder = await this.orderModel.findById(orderId);
    if (!findOrder) {
      throw new NotFoundException('no order were found with this specific id');
    }
    return findOrder;
  }

  //@ Post('orders/create')
  async createOrder(dto: Order) {
    const newOrder = await this.orderModel.create(dto);
    if (!newOrder) {
      throw new NotFoundException('The new order was saved in the database');
    }
    // Recover the data and add in DB, if error connection, throw error, otherwise return the orders with id and redirect in FE
    return newOrder;
  }

  // @Patch('/orders/:id/edit')
  async updateOrder(dto, orderId) {
    const updateOrder = this.orderModel.findByIdAndUpdate(orderId, dto);
    return updateOrder;
    // console.log('show id', orderId);
    // console.log('show dto', dto);
  }
}
