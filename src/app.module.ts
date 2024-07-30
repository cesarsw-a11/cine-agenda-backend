import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookerModule } from './booker/booker.module';
import { BookingModule } from './booking/booking.module';
import { AuditoriumModule } from './auditorium/auditorium.module';
import { SeatModule } from './seat/seat.module';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BookerModule, BookingModule, AuditoriumModule, SeatModule, MovieModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
