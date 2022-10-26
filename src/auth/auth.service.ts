import { ForbiddenException, Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    const passwordValid = await bcrypt.compare(password, user.password)

    if (!user) {
        throw new NotAcceptableException('could not find the user');
      }

    if (user && passwordValid) {
      return {
        userId: user.id,
        userName: user.username
      };
    }

    return null;
  }
  }
  // @Get('/auth')
  getAuthentification() {
    console.log('hello');
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
      // delete createUser.password;
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
