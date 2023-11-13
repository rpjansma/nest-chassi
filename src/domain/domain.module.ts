import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EconomicsService } from './service/economics.service';

@Module({
  imports: [HttpModule],
  providers: [EconomicsService],
  exports: [EconomicsService],
})
export class DomainModule {}
