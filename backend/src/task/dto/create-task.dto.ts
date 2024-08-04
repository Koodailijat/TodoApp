import { IsArray, IsDate, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  start_date: string;

  @IsDate()
  end_date: string;

  @IsString()
  status: string;

  @IsArray()
  tags: string[];
}
