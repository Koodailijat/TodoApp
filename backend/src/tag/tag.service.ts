import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  // async create(author_id: string, createTagDto: CreateTagDto): Promise<Tag> {
  //   return this.prisma.tag.create({
  //     data: {
  //       author_id,
  //       ...createTagDto,
  //     },
  //   });
  // }

  findAllByAuthor(author_id: string) {
    return this.prisma.tag.findMany({
      where: {
        author_id,
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} tag`;
  // }

  // update(id: number, updateTagDto: UpdateTagDto) {
  //   return `This action updates a #${id} tag`;
  // }

  async remove(author_id: string, id: string) {
    return this.prisma.tag.delete({
      where: {
        id,
        author_id,
      },
    });
  }
}
