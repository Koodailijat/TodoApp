import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteUserDto } from './dto/delete-user.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUserDto } from './dto/current-user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: "Get current user's information with object counts",
  })
  async getCurrent(@Request() req): Promise<CurrentUserDto> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = await this.userService.findOne(
      {
        id: req.user.userId,
      },
      {
        _count: {
          select: { Task: true, Tag: true },
        },
      },
    );
    return Promise.resolve(result);
  }

  @Delete()
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, LocalAuthGuard)
  @ApiOperation({ summary: 'Delete user including their tasks and tags' })
  remove(@Request() req, @Body() deleteUserDto: DeleteUserDto) {
    return this.userService.remove({
      id: req.user.userId,
      username: deleteUserDto.username,
    });
  }
}
