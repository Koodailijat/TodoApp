import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOne(
    UserWhereInput: Prisma.UserWhereInput,
    UserInclude?: Prisma.UserInclude,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: UserWhereInput,
      include: UserInclude,
    });
  }

  // async update(params: {
  //   where: Prisma.UserWhereUniqueInput;
  //   data: Prisma.UserUpdateInput;
  // }): Promise<User> {
  //   const { where, data } = params;
  //   return this.prisma.user.update({
  //     data,
  //     where,
  //   });
  // }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
