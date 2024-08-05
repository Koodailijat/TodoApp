import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TagDto {
  @IsUUID()
  @ApiProperty({ example: '9fd6f18e-3bc6-4cd9-88c8-4d641164afda' })
  id: string;

  @IsUUID()
  @ApiProperty({ example: '9fd6f18e-3bc6-4cd9-88c8-4d641164afda' })
  author_id: string;

  @IsString()
  @ApiProperty({ example: 'Hobby' })
  name: string;
}
