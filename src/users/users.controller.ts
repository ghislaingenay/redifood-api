import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Response,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async addUser(
    @Body('name') fullName: string,
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);

    const result = await this.usersService.insertUser(
      userName,
      hashedPassword,
      fullName,
    );
    return {
      msg: 'User successfully registered',
      userId: result.id,
      userName: result.username,
    };
  }

  //Post / Login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req): Promise<any> {
    console.log(req.body);
    return { User: req.user, msg: 'User logged in' };
  }

  //Get / protected
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  async getHello(@Request() req, @Response() res): Promise<any> {
    console.log(req.user);
    res.json(req.user);
  }

  //Get / logout
  @Get('/logout')
  async logout(@Request() req, @Response() res): Promise<any> {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json({ msg: 'The user session has ended' });
  }
}
