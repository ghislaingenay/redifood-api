import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
