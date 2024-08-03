import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSJ9.6vlZAXA0RwAe2gi_WD05meFkyi-rylnn5rqYetZp-K0',
  })
  @IsString()
  auth_token: string;

  @ApiProperty({ example: '8cfd6d2a-396a-4228-9f7e-0598573c86d1' })
  @IsString()
  id: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  last_name: string;

  @ApiProperty({ example: 'johndoe' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'john.doe@mail.com' })
  @IsEmail()
  email: string;
}
