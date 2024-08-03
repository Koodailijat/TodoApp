import { IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupUserDto {
  @ApiProperty({ example: 'John' })
  @Length(2, 16)
  first_name: string;

  @ApiProperty({ example: 'Doe' })
  @Length(2, 16)
  last_name: string;

  @ApiProperty({ example: 'johndoe' })
  @Length(2, 16)
  username: string;

  @ApiProperty({ example: 'john.doe@mail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'strongpassword123' })
  @IsString()
  password: string;
}
