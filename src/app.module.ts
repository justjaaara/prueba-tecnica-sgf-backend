import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './animals/animals.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AnimalsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
