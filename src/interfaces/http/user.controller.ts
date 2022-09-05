import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app/services/app.service';

@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
