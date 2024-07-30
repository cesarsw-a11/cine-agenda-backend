import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

interface CreateBookingData {
  email: string;
  auditorium: string;
  time: string;
  seats: number[];
}


@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(@Body() data: CreateBookingData) {
    return this.bookingService.createBooking(data);
  }

  @Get('availability')
  async getAvailability(
    @Query('auditoriumId') auditoriumId: number,
    @Query('time') time: string,
  ) {
    return this.bookingService.getAvailability(auditoriumId, time);
  }

  @Get(':bookerId')
  async getBookingsByBooker(@Param('bookerId') bookerId: number) {
    return this.bookingService.getBookingsByBooker(bookerId);
  }
}
