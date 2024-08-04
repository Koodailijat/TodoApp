import { Body, Controller, Delete, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteUserDto } from './dto/delete-user.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Delete()
  @UseGuards(JwtAuthGuard, LocalAuthGuard)
  @ApiOperation({ summary: 'Delete user including their tasks and tags' })
  remove(@Request() req, @Body() deleteUserDto: DeleteUserDto) {
    return this.userService.remove({
      id: req.user.userId,
      username: deleteUserDto.username,
    });
  }
}
