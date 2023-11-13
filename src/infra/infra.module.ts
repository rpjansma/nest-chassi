import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EconomicsIntegrationImpl } from './http/economics.integration';

@Module({
  imports: [HttpModule],
  providers: [EconomicsIntegrationImpl],
  exports: [EconomicsIntegrationImpl],
})
export class InfraModule {}
