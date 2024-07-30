import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';


interface CreateBookingData {
  email: string;
  auditorium: string;
  time: string;
  seats: number[];
}

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async createBooking(data: CreateBookingData) {
    const { email, auditorium, time, seats } = data;

    const booker = await this.prisma.booker.findUnique({
      where: { email }
    });

    // Encontrar la sala
    const auditoriumRecord = await this.prisma.auditorium.findFirst({
      where: { name: auditorium },
    });

    if (!auditoriumRecord) {
      throw new Error('Auditorium not found');
    }

    // Crear los asientos en la base de datos
    const createdSeats = await this.prisma.seat.createMany({
      data: seats.map((number) => ({
        number,
        auditoriumId: auditoriumRecord.id,
      })),
    });

    const selectedSeats = await this.prisma.seat.findMany({
      where: {
        number: { in: seats },
        auditoriumId: auditoriumRecord.id,
      },
    });

    // Crear el booking
    const booking = await this.prisma.booking.create({
      data: {
        bookerId: booker.id,
        auditoriumId: auditoriumRecord.id,
        time,
        seatId: createdSeats.count,
      },
      include: { seat: true }
    });

    console.log(booking)

    return booking;
  }

  async getBookingsByBooker(bookerId: number) {
    return this.prisma.booking.findMany({
      where: { bookerId },
      include: {
        booker: true,
        auditorium: true,
        seat: true,
      },
    });
  }

  async getAvailability(auditoriumId: number, time: string) {
    const bookings = await this.prisma.booking.findMany({
      where: { auditoriumId, time },
    });

    const auditorium = await this.prisma.auditorium.findUnique({
      where: { id: auditoriumId },
    });

    const availableSeats = auditorium.capacity - bookings.length;
    return { availableSeats };
  }
}
