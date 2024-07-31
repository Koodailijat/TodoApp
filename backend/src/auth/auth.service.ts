import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';
import { LoginUserDto } from '../dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupUserDto } from '../dto/signup-user.dto';
import { AuthTokenDto } from '../dto/auth-token.dto';

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

  async login({ username, password }: LoginUserDto): Promise<AuthTokenDto> {
    const user = await this.userService.findOne({ username });

    if (!user && !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

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
}
