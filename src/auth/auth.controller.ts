import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  getAuthentification(): void {
    this.authService.getAuthentification();
  }

  @Post('signup')
  async signup(
    @Body('name') nameUser: string,
    @Body('username') userName: string,
    @Body('password') passwordUser: string,
  ): Promise<any> {
    const dto = {
      name: nameUser,
      username: userName,
      password: passwordUser,
    };
    return await this.authService.signup(dto);
  }

  @Post('login')
  async login(
    @Body('name') nameUser: string,
    @Body('username') userName: string,
    @Body('password') passwordUser: string,
  ): Promise<any> {
    const dto = {
      name: nameUser,
      username: userName,
      password: passwordUser,
    };
    return await this.authService.login(dto);
  }
}
