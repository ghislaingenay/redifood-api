import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuthentification(): {isAuthenticated : boolean} {
    this.authService.getAuthentification()
  };

  @Post('signup')
  signup(
    @Body('name') nameUser: string,
    @Body('username') userName: string,
    @Body('password') passwordUser: string,
  ): boolean {
    const dto = {
      name: nameUser,
      username: userName,
      password: passwordUser,
    };
    return this.authService.signup(dto);
  }

  @Post('login')
  login(
    @Body('name') nameUser: string,
    @Body('username') userName: string,
    @Body('password') passwordUser: string,
  ): boolean {
    const dto = {
      name: nameUser,
      username: userName,
      password: passwordUser,
    };
    return this.authService.login(dto);
  }
}
