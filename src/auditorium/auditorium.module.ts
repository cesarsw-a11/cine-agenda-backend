import { Module } from '@nestjs/common';
import { AuditoriumController } from './auditorium.controller';
import { AuditoriumService } from './auditorium.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AuditoriumController],
  providers: [AuditoriumService]
})
export class AuditoriumModule {}
