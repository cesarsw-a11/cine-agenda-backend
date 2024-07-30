import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuditoriumService } from './auditorium.service';

@Controller('auditorium')
export class AuditoriumController {
  constructor(private readonly auditoriumService: AuditoriumService) {}

  @Post()
  async createAuditorium(
    @Body('name') name: string,
    @Body('capacity') capacity: number,
  ) {
    return this.auditoriumService.createAuditorium(name, capacity);
  }

  @Get()
  async findAll() {
    return this.auditoriumService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.auditoriumService.findOne(id);
  }
}
