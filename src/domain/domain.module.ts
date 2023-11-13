import { Module } from '@nestjs/common';
import { EconomicsService } from './service/economics.service';
import { InfraModule } from 'src/infra/infra.module';

@Module({
  imports: [InfraModule],
  providers: [EconomicsService],
  exports: [EconomicsService],
})
export class DomainModule {}
