import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tag')
@ApiTags('Tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  // @Post()
  // create(@Request() req, @Body() createTagDto: CreateTagDto) {
  //   return this.tagService.create(req.user.userId, createTagDto);
  // }

  @Get()
  @ApiOperation({ summary: "Get user's all tags" })
  findAllByAuthor(@Request() req) {
    return this.tagService.findAllByAuthor(req.user.userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tagService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
  //   return this.tagService.update(+id, updateTagDto);
  // }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.tagService.remove(req.user.userId, id);
  }
}
