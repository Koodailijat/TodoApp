import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from '../prisma.service';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(
    author_id: string,
    createTaskDto: CreateTaskDto,
  ): Promise<TaskDto> {
    const { tags, ...newTask } = createTaskDto;

    return this.prisma.task.create({
      data: {
        ...newTask,
        author_id,
        tags: {
          connectOrCreate: tags.map((tag) => ({
            create: { name: tag, author_id },
            where: { name: tag, author_id },
          })),
        },
      },
      include: {
        tags: true,
      },
    });
  }

  async findAllByAuthor(author_id: string) {
    return this.prisma.task.findMany({
      where: {
        author_id,
      },
      include: {
        tags: true,
      },
    });
  }

  findOne(author_id: string, id: string) {
    return this.prisma.task.findFirst({
      where: {
        author_id,
        id,
      },
      include: {
        tags: true,
      },
    });
  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  remove(author_id, id: string) {
    return this.prisma.task.delete({
      where: {
        id,
        author_id,
      },
    });
  }
}
