import * as mongoose from 'mongoose';

export const FoodSchema = new mongoose.Schema({
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
});
