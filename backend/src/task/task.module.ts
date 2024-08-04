import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from '../prisma.service';
import { TagService } from '../tag/tag.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, TagService],
})
export class TaskModule {}
