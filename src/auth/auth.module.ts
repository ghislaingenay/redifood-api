import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL } from 'constant';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: USER_MODEL, schema: USER_MODEL }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
