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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UniqueUserExceptionFilter } from '../common/filters/unique-user-exception.filter';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from '../common/decorators/public.decorator';
import { AuthTokenDto } from './dto/auth-token.dto';

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
  @ApiOperation({ summary: "Check user's authentication status" })
  @ApiResponse({ status: 200, description: 'Authenticated.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getAuthentication(): Promise<void> {
    return;
  }

  @Post('signup')
  @Public()
  @UseFilters(new UniqueUserExceptionFilter())
  async signup(@Body() signupUserDto: SignupUserDto): Promise<void> {
    return this.authService.signUp(signupUserDto);
  }

  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<AuthTokenDto> {
    return this.authService.login(req.user);
  }
}
