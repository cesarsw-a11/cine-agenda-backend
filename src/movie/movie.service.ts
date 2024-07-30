import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async createMovie(title: string) {
    return this.prisma.movie.create({
      data: {
        title,
      },
    });
  }

  async findAll() {
    return this.prisma.movie.findMany();
  }

  async findOne(id: number) {
    return this.prisma.movie.findUnique({
      where: { id },
    });
  }
}
