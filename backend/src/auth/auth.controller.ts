import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignupUserDto } from '../dto/signup-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { UniqueUserExceptionFilter } from '../common/filters/unique-user-exception.filter';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  @UsePipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  )
  @UseFilters(new UniqueUserExceptionFilter())
  async signup(@Body() signupUserDto: SignupUserDto) {
    return this.authService.signUp(signupUserDto);
  }

  @Post('login')
  @UsePipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  )
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
