import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsISO8601, IsString, IsUUID } from 'class-validator';

export class CurrentUserDto {
  @IsUUID()
  @ApiProperty({ example: '9fd6f18e-3bc6-4cd9-88c8-4d641164afda' })
  id: string;

  @IsString()
  @ApiProperty({ example: 'John' })
  first_name: string;

  @IsString()
  @ApiProperty({ example: 'Doe' })
  last_name: string;

  @IsString()
  @ApiProperty({ example: 'johndoe' })
  username: string;

  @IsEmail()
  @ApiProperty({ example: 'john.doe@mail.com' })
  email: string;

  @IsISO8601()
  @ApiProperty({ example: '2024-06-02T16:10:23.664Z' })
  created_at: Date;

  @IsISO8601()
  @ApiProperty({ example: '2024-07-16T20:21:23.664Z' })
  updated_at: Date;
}
