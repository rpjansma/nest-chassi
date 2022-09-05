import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export default class User {
  @IsString()
  @MinLength(4)
  @ApiProperty({
    type: String,
    example: 'Name',
    description: 'User name',
  })
  private name: string;
  @IsEmail()
  @IsString()
  @MinLength(4)
  @ApiProperty({
    type: String,
    example: 'email@dominio.com',
    description: 'User email',
  })
  private email: string;
  private password: string;
}
