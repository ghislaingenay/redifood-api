import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from 'src/app.interface';
import * as bcrypt from 'bcrypt';
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

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username: username });
    if (user) {
      await bcrypt.compare(user.password, password, (err, result) => {
        if (result) {
          return user;
        }
      });
    }
  }
  // @Get('/auth')
  getAuthentification() {
    console.log('hello')
  }

  // @Post('auth/signup')
  async signup(dto: User) {
    try {
      const user = await this.userModel
        .findOne({
          username: dto.username,
        })
        .exec();
      if (user) {
        throw new Error('The user is already registered');
      }
      const hash = bcrypt.hashSync(dto.password, salt);
      dto.password = hash;
      const createUser = await this.userModel.create(dto);
      // Create a session or JWTreq.login(createUser, err => {
      delete createUser.password;
      return createUser;
    } catch (err) {
      throw new Error('User already in DB');
    }
  }

  // @Post('auth/login')
  async login(dto: User) {
    try {
      const user = await this.userModel
        .findOne({ username: dto.username })
        .exec();
      if (user) {
        await bcrypt.compare(dto.password, user.password, (err, result) => {
          if (result) {
            // JWT connection
            // render the selected page and send credentials to web app
            delete user.password; // Avoid to recover this information in the FE
            return user;
          }
        })
      } else {
        throw new ForbiddenException('credentials incorrect')
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
