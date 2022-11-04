import {
  ForbiddenException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwt: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }

    if (user && passwordValid) {
      return {
        userId: user.id,
        userName: user.username,
      };
    }

    return null;
  }
  // @Post('signup')
  async signup(req) {
    try {
      const foundUser = await this.usersService.getUser(req.body.username);
      if (foundUser) {
        throw new NotAcceptableException('user already found in the database');
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash;
      const { username, password, fullname } = req.body;
      const user = await this.usersService.insertUser(
        username,
        password,
        fullname,
      );
      return this.signToken(user._id, user.username);
    } catch (err) {
      throw new Error(err);
    }
  }

  // @Post('login')
  async login(req: Request) {
    const foundUser = await this.usersService.getUser(req.body.username);
    if (!foundUser) {
      throw new NotAcceptableException('could not find the user');
    }
    if (foundUser) {
      try {
        await bcrypt.compare(
          req.body.password,
          foundUser.password,
          (err, result) => {
            if (result === false) {
              return { error: true };
            } else {
              return this.signToken(foundUser._id, foundUser.username);
            }
          },
        );
      } catch (err) {
        throw new Error('Credentials incorrect');
      }
    }
  }
  async signToken(
    userId: string,
    username: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      username,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: process.env.JWT_SECRET,
    });
    return {
      access_token: token,
    };
  }
}
