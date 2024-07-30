import { Module } from '@nestjs/common';
import { BookerController } from './booker.controller';
import { BookerService } from './booker.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BookerController],
  providers: [BookerService]
})
export class BookerModule { }
