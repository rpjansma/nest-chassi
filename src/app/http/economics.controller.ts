import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EconomicsService } from 'src/domain/service/economics.service';

@Controller('economics-info')
export class EconomicsInfoController {
  constructor(private readonly economicsService: EconomicsService) {}

  @Get('ipca')
  async getIpca(
    @Query('initialDate') initialDate: string,
    @Query('finalDate') finalDate: string,
  ) {
    try {
      return this.economicsService.getIpca(initialDate, finalDate);
    } catch (error) {
      throw new HttpException(
        'We had a failure while trying to make your requisition happen. Sorry, try again!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('pib')
  async getPib(
    @Query('initialDate') initialDate: string,
    @Query('finalDate') finalDate: string,
  ) {
    try {
      return this.economicsService.getPib(initialDate, finalDate);
    } catch (error) {
      throw new HttpException(
        'We had a failure while trying to make your requisition happen. Sorry, try again!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('cdi')
  async getCdi(
    @Query('initialDate') initialDate: string,
    @Query('finalDate') finalDate: string,
  ) {
    try {
      return this.economicsService.getCdi(initialDate, finalDate);
    } catch (error) {
      throw new HttpException(
        'We had a failure while trying to make your requisition happen. Sorry, try again!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
