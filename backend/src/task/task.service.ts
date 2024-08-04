import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma.service';
import { TagService } from '../tag/tag.service';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private tagService: TagService,
  ) {}

  async create(author_id: string, createTaskDto: CreateTaskDto) {
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

  findAllByAuthor(author_id: string) {
    return this.prisma.task.findMany({
      where: {
        author_id,
      },
    });
  }

  findOne(author_id: string, id: string) {
    return this.prisma.task.findFirst({
      where: {
        author_id,
        id,
      },
    });
  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} task`;
  // }
}
