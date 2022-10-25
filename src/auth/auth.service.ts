import { Injectable } from '@nestjs/common';
import { User } from 'src/app.interface';

@Injectable()
export class AuthService {
  // @Get('/auth')
  getAuthentification() {
    return { isAuthenticated: false };
  }

  // @Post('auth/login')
  login(dto: User) {
    console.log(dto);
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
