// import { Controller, Get, Query } from '@nestjs/common';
// import { EconomicsService } from '../services/economicsServices';
// import { ErrorResponse } from '../services/errorResponse';

// @Controller('cdi')
// export class CdiController {
//   constructor(
//     private readonly economicsService: EconomicsService,
//     private readonly errorResponse: ErrorResponse,
//   ) {}

//   @Get()
//   async get(
//     @Query('initialDate') initialDate: string,
//     @Query('finalDate') finalDate: string,
//   ) {
//     try {
//       return await this.economicsService.getCdi(initialDate, finalDate);
//     } catch (error) {
//       this.errorResponse.error500();
//     }
//   }
// }
