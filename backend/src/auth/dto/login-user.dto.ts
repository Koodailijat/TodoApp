import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'johndoe' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'strongpassword123' })
  @IsString()
  password: string;
}
