import { Injectable } from '@nestjs/common';
import { User } from 'src/app.interface';
import bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL } from 'constant';
import { Model } from 'mongoose';

// Implement the number of salt for hash password generation
const salt = bcrypt.genSaltSync(10);

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(USER_MODEL) private readonly userModel:Model<User>,
  ) {}
  // @Get('/auth')
  getAuthentification() {
    console.log('hello')
  }

    // @Post('auth/login')
  login(dto: User) {
    try {
      const user = 
    }

    // if username already allocated => throw new  try catch err   if (error) {} check error code mongoose duplicate filed => throw new Forbidden Execrptio  ('credentials) else 
    // find the user by email
    // if user does not exist, throw excetpt
    return false;
  }

  // @Post('auth/signup')
  signup(dto: User) {
    console.log(dto);
    // find the user by email
    // if user does not exist throw exception
    // Compare password
    // if password incorrect => throw exception
    // Otherwise, send data
    // if (!user) throw new ForbiddenExeption ('Credentials incorrect')
    // if (wrons password) throw new ForbiddenExeption ('Credentials incorrect')
    // delete user.hash
    return false;
  }
}
