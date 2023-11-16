import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppModule } from 'src/app/app.module';

@Module({
  imports: [AppModule],
  providers: [],
  exports: [],
})
export class TestModule {}
