import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { PrismaService } from '../prisma.service';
import { Tag } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(author_id: string, createTagDto: CreateTagDto): Promise<Tag> {
    return this.prisma.tag.create({
      data: {
        author_id,
        ...createTagDto,
      },
    });
  }

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

  // remove(id: number) {
  //   return `This action removes a #${id} tag`;
  // }
}
