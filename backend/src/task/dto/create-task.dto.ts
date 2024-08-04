import { IsArray, IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({ example: 'Important task' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Remember to do chores' })
  description: string;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2024-06-08T20:00:31+03:00' })
  start_date: string;

  @IsDate()
  @IsOptional()
  @ApiProperty({ example: '2024-06-15T20:00:31+03:00' })
  end_date: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiProperty({ example: 'TODO' })
  status: TaskStatus = TaskStatus.TODO;

  @IsArray()
  @IsOptional()
  @ApiProperty({ example: ['Daily', 'Common'] })
  tags: string[] = [];
}
