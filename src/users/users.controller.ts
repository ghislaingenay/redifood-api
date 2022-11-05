import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request as Req,
  Response as Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req): Promise<any> {
    console.log(req.body);
    return { User: req.user, msg: 'User logged in' };
  }

  //Get / protected
  @Get('protected')
  async getHello(@Req() req, @Res() res): Promise<any> {
    console.log(req.user);
    res.json(req.user);
  }

  //Get / logout
  @Get('/logout')
  async logout(@Req() req, @Res() res): Promise<any> {
    res.json({ msg: 'The user session has ended' });
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('me')
  // getMe(@Req() req: Request) {
  //   return req.user;
  // }
}
