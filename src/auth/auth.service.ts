import { ForbiddenException, Injectable } from '@nestjs/common';
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

  // @Post('auth/signup')
  async signup(dto: User) {
    
  }

    // @Post('auth/login')
  login(dto: User) {
    try {
      const user = await this.userModel.findOne( {username: dto.username })
      if (user) {
        await bcrypt.compare(dto.password, user.password, (err, result) => {
          if (result) {
            // JWT connection
            // render the selected page and send credentials to web app
            delete user.password // Avoid to recover this information in the FE
            return user
          }
        })
      } else {
        throw new ForbiddenException('credentials incorrect')
      }
    } catch (err) {
      throw new Error(err)
    }
    }

    // if username already allocated => throw new  try catch err   if (error) {} check error code mongoose duplicate filed => throw new Forbidden Execrptio  ('credentials) else 
    // find the user by email
    // if user does not exist, throw excetpt
    return false;
  }

}
