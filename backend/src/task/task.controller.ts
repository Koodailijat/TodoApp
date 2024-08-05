import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UsePipes,
  ValidationPipe,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TaskDto } from './dto/task.dto';

@Controller('task')
@UsePipes(new ValidationPipe({ transform: true }))
@ApiTags('Task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a task and any including new tags' })
  async create(
    @Request() req,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<TaskDto> {
    return this.taskService.create(req.user.userId, createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: "Get user's all tasks" })
  async findAllByAuthor(@Request() req): Promise<TaskDto[]> {
    return this.taskService.findAllByAuthor(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: "Get user's task by id" })
  findOneByAuthor(@Request() req, @Param('id') id: string): Promise<TaskDto> {
    return this.taskService.findOne(req.user.userId, id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(+id, updateTaskDto);
  // }

  @Delete(':id')
  @HttpCode(204)
  remove(@Request() req, @Param('id') id: string) {
    return this.taskService.remove(req.user.userId, id);
  }
}
