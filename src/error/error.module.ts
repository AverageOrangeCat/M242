import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';

@Module({
  providers: [ErrorService],
  controllers: [ErrorController]
})
export class ErrorModule {}
