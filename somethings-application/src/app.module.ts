import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SomethingsModule } from './somethings/somethings.module';

@Module({
  imports: [SomethingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
