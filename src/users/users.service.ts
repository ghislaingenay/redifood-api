import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL } from 'constant';
import { User } from 'src/app.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel: Model<User>,
  ) {}
}
