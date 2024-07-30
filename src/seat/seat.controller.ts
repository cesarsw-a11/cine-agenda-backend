import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SeatService } from './seat.service';

@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post()
  async createSeat(
    @Body('number') number: number,
    @Body('auditoriumId') auditoriumId: number,
  ) {
    return this.seatService.createSeat(number, auditoriumId);
  }

  @Get('auditorium/:auditoriumId')
  async findAllByAuditorium(@Param('auditoriumId') auditoriumId: number) {
    return this.seatService.findAllByAuditorium(auditoriumId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.seatService.findOne(id);
  }
}
