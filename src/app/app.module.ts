import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { EconomicsService } from 'src/domain/service/economics.service';
import { IbovespaController } from './http/ibovespa.controller';

@Module({
  imports: [DomainModule],
  controllers: [IbovespaController],
  providers: [DomainModule],
})
export class AppModule {}
