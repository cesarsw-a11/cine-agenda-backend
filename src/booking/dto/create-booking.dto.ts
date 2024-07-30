import { IsEmail, IsNotEmpty, IsArray, ArrayNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateBookingDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  auditorium: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  seats: number[];
}
