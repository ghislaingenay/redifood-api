import { Controller, Post, Get, Response, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  accessLogin(@Request() req, @Response() res) {}

  @Get('signup')
  accessSignUp(@Request() req, @Response() res) {}

  @Get('logout')
  logoutAccess(@Request() req, @Response() res) {
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
  async signup(@Request() req) {
    return await this.authService.signup(req);
  }

  @Post('login')
  async login(@Request() req) {
    console.log(req.body);
    return await this.authService.login(req);
  }
}
