import { Injectable, NotFoundException } from '@nestjs/common';
import {
  foods as foundFoods,
  ordersData,
  section as allSection,
} from '../data';
import { Order } from 'src/app.interface';

@Injectable()
export class OrdersService {
  // @Get("/orders/create")
  recoverFoodAndSection() {
    // console.log("get the root")
    return {
      foods: foundFoods,
      section: allSection,
    };
  }

  editOneOrder(orderId: string) {
    const foodsAndSection = this.recoverFoodAndSection();
    console.log('orderId', orderId);
    return {
      editOrder: {
        _id: '01frVGVH4514DC',
        paid: false,
        table: 7,
        total: 23.2,
        payment: '',
        menu: [
          {
            food: {
              _id: '8',
              name: 'Sprite can - 500 mL',
              photo:
                'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              price: 1.6,
              description: 'Sprite can of 500 mL',
              section: 'drink',
              extra: 'soda',
            },
            qty: 2,
          },
          {
            food: {
              _id: '1',
              name: 'Pizza Mediterranean',
              photo:
                'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              price: 12.5,
              description: 'Soo good',
              section: 'pizza',
              extra: 'tomato',
            },
            qty: 1,
          },
        ],
      },
      allfoods: foodsAndSection.foods,
      allsection: foodsAndSection.section,
    };
  }

  // @Get("/orders/:id")
  recoverOneOrder(orderId: string) {
    console.log('recover-id', orderId);
    const findOrder = ordersData.find((element) => element._id === orderId);
    if (!findOrder) {
      throw new NotFoundException('no order were found with this specific id')
    }
    return findOrder;
  }

  //@ Post('orders/create')
  createOrder(dto: Order) {
    // Recover the data and add in DB, if error connection, throw error, otherwise return the orders with id and redirect in FE
    return { test: dto };
  }

  // @Patch('/orders/:id/edit')
  updateOrder(dto) {
    console.log(dto);
  }
}
