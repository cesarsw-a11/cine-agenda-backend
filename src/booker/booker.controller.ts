import { Controller, Post, Body } from '@nestjs/common';
import { BookerService } from './booker.service';

@Controller('booker')
export class BookerController {
  constructor(private readonly bookerService: BookerService) {}

  @Post()
  async createBooker(@Body('email') email: string, password: string, name: string) {
    return this.bookerService.createBooker(email, password, name);
  }
}
