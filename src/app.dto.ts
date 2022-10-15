import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsDate,
  IsBoolean,
  IsArray,
  ArrayMinSize,
} from 'class-validator';
import { Menu } from './app.interface';

export class OrderDto {
  @IsInt()
  @IsNotEmpty()
  table: number;

  @IsNotEmpty()
  @IsBoolean()
  paid: boolean;

  @IsInt()
  @IsNotEmpty()
  total: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  menu: Menu[];

  @IsDate()
  date: Date;

  @IsString()
  @IsNotEmpty()
  payment: string;
}
