import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupUserDto } from './dto/signup-user.dto';
import { AuthTokenDto } from './dto/auth-token.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp({ password, ...data }: SignupUserDto): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);

    await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return;
  }

  async login(user: User): Promise<AuthTokenDto> {
    const payload = { sub: user.id, username: user.username };

    return {
      auth_token: await this.jwtService.signAsync(payload),
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.username,
    };
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
