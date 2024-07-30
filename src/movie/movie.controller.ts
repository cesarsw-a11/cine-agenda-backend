import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async createMovie(@Body('title') title: string) {
    return this.movieService.createMovie(title);
  }

  @Get()
  async findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.movieService.findOne(id);
  }
}
