import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ApiModule } from 'src/api/api.module';
import { HomeModule } from 'src/home/home.module';
import { ErrorModule } from 'src/error/error.module';

@Module({
  imports: [
    ApiModule,
    HomeModule,
    ErrorModule,
  ],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
