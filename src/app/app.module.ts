import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { EconomicsService } from 'src/domain/service/economics.service';
import { EconomicsInfoController } from './http/economics.controller';

@Module({
  imports: [DomainModule],
  controllers: [EconomicsInfoController],
  providers: [DomainModule],
})
export class AppModule {}
