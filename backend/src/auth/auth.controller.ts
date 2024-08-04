import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseGuards,
  UsePipes,
  Request,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { SignupUserDto } from './dto/signup-user.dto';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UniqueUserExceptionFilter } from '../common/filters/unique-user-exception.filter';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from '../common/decorators/public.decorator';

@Controller('auth')
@UsePipes(
  new ValidationPipe({
    disableErrorMessages: true,
  }),
)
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Authenticated.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getAuthentication() {
    return;
  }

  @Post('signup')
  @Public()
  @UseFilters(new UniqueUserExceptionFilter())
  async signup(@Body() signupUserDto: SignupUserDto) {
    return this.authService.signUp(signupUserDto);
  }

  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
