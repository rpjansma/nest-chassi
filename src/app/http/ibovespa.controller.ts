import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EconomicsService } from 'src/domain/service/economics.service';

@Controller('ibovespa')
export class IbovespaController {
  constructor(private readonly economicsService: EconomicsService) {}

  @Get()
  async get(
    @Query('initialDate') initialDate: string,
    @Query('finalDate') finalDate: string,
  ) {
    try {
      return this.economicsService.getIbovespa(initialDate, finalDate);
    } catch (error) {
      throw new HttpException(
        'We had a failure while trying to make your requisition happen. Sorry, try again!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
