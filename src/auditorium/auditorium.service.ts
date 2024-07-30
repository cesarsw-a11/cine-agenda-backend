import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditoriumService {
  constructor(private prisma: PrismaService) {}

  async createAuditorium(name: string, capacity: number) {
    return this.prisma.auditorium.create({
      data: {
        name,
        capacity,
      },
    });
  }

  async findAll() {
    return this.prisma.auditorium.findMany();
  }

  async findOne(id: number) {
    return this.prisma.auditorium.findUnique({
      where: { id },
    });
  }
}
