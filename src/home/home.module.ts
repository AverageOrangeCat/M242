import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { ErrorModule } from 'src/error/error.module';

@Module({
  imports: [ErrorModule],
  providers: [HomeService],
  controllers: [HomeController]
})
export class HomeModule {}
