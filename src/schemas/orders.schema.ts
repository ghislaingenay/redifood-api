import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  table: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  total: Number,
  menu: [
    {
      food: {
        name: {
          type: String,
          required: true,
        },
        photo: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        description: String,
        // Could implement a DB for section and section back the id
        section: {
          type: String,
          required: true,
        },
        extra: {
          type: String,
          required: true,
        },
      },
      qty: {
        required: true,
        type: Number,
      },
    },
  ],
  date: Date,
  payment: String,
});
