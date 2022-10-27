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

  //Signup user method with username and password
  async insertUser(userName: string, passWord: string, fullName: string) {
    const username = userName.toLowerCase();
    const fullname = fullName.toLowerCase();
    const newUser = await this.userModel.create({
      name: fullname,
      username: username,
      password: passWord,
    });
    return newUser;
  }

  //log in user using the findOne method
  async getUser(userName: string) {
    const username = userName.toLowerCase();
    const user = await this.userModel.findOne({ username: username });
    return user;
  }
}
