import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeatService {
  constructor(private prisma: PrismaService) {}

  async createSeat(number: number, auditoriumId: number) {
    return this.prisma.seat.create({
      data: {
        number,
        auditoriumId,
      },
    });
  }

  async findAllByAuditorium(auditoriumId: number) {
    return this.prisma.seat.findMany({
      where: { auditoriumId },
    });
  }

  async findOne(id: number) {
    return this.prisma.seat.findUnique({
      where: { id },
    });
  }
}
