import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookerService {
  constructor(private prisma: PrismaService) {}

  async createBooker(email: string, password: string, name: string) {
    return this.prisma.booker.create({
      data: {
        email,
        password,
        name
      },
    });
  }

  async findBookerByEmail(email: string) {
    return this.prisma.booker.findUnique({
      where: { email },
    });
  }
}
