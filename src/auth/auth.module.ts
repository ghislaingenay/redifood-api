import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL } from 'constant';
import { UserSchema } from 'src/schemas/users.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema }]),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PassportModule],
})
export class AuthModule {}
