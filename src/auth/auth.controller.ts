import {
  Controller,
  Post,
  Get,
  Body,
  Request as Req,
  Response as Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  accessLogin(@Req() req, @Res() res) {
    // console.log('clikde');
    console.log('req', req.user);
    if (req.isAuthenticated()) {
      console.log('yes');
      res.json(req.user);
    } else {
      console.log('yuu');
      res.sendStatus(403);
    }
  }

  @Get('signup')
  accessSignUp(@Req() req, @Res() res) {
    if (req.isAuthenticated()) {
      console.log('yes', req.user);
      res.json(req.user);
    } else {
      console.log('yuu');
      res.json({ isLoggedIn: false });
    }
  }

  @Get('logout')
  logoutAccess(@Req() req, @Res() res) {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        throw new Error('Impossible to remove the current session');
      }
      res.clearCookie('connect.sid');
      res.json({ isLoggedOut: true });
    });
  }

  @Post('signup')
  async signup(@Req() req) {
    return await this.authService.signup(req);
  }

  @Post('login')
  async login(@Req() req) {
    console.log(req.body);
    return await this.authService.login(req);
  }
}
