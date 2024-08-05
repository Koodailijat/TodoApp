import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsOptional,
  IsString,
} from 'class-validator';
import { TaskStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({ example: 'Important task' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Remember to do chores' })
  description?: string;

  @IsISO8601()
  @IsOptional()
  @ApiProperty({ example: '2024-06-02T16:10:23.664Z' })
  start_date?: string;

  @IsISO8601()
  @IsOptional()
  @ApiProperty({ example: '2024-07-16T20:21:23.664Z' })
  end_date?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiProperty({ example: 'TODO' })
  status?: TaskStatus = TaskStatus.TODO;

  @IsArray()
  @IsOptional()
  @ApiProperty({ example: ['Daily', 'Common'] })
  tags?: string[] = [];
}
