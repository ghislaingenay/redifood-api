import * as mongoose from 'mongoose';

export const SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  extra: {
    type: [String],
    required: true,
  },
});
