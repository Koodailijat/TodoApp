import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client';
import { TagDto } from '../../tag/dto/tag.dto';

export class TaskDto {
  @IsUUID()
  @ApiProperty({ example: '9fd6f18e-3bc6-4cd9-88c8-4d641164afda' })
  id: string;

  @IsUUID()
  @ApiProperty({ example: '9fd6f18e-3bc6-4cd9-88c8-4d641164afda' })
  author_id: string;

  @IsString()
  @ApiProperty({ example: 'Important task' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Remember to do chores' })
  description: string | null;

  @IsISO8601()
  @IsOptional()
  @ApiProperty({ example: '2024-06-02T16:10:23.664Z' })
  start_date: Date | null;

  @IsISO8601()
  @IsOptional()
  @ApiProperty({ example: '2024-07-16T20:21:23.664Z' })
  end_date: Date | null;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiProperty({ example: 'TODO' })
  status: TaskStatus = TaskStatus.TODO;

  @IsISO8601()
  @IsOptional()
  @ApiProperty({ example: '2024-06-02T16:10:23.664Z' })
  created_at: Date;

  @IsISO8601()
  @IsOptional()
  @ApiProperty({ example: '2024-07-16T20:21:23.664Z' })
  updated_at: Date;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: [
      {
        id: 'e54e17cb-9dff-4e6f-b3b7-3668f523f549',
        author_id: 'a061efc6-b346-47f6-bb63-4eb6b91ad3bf',
        name: 'Hobby',
      },
    ],
  })
  tags: TagDto[];
}
