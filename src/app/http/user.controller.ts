// import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
// import { UserService } from '../services/userService';
// import { ErrorResponse } from '../services/errorResponse';
// import { EmailService } from '../services/emailService';

// @Controller('user')
// export class UserController {
//   constructor(
//     private readonly userService: UserService,
//     private readonly errorResponse: ErrorResponse,
//     private readonly emailService: EmailService,
//   ) {}

//   @Get()
//   async get() {
//     try {
//       return await this.userService.getAllUsers();
//     } catch (error) {
//       this.errorResponse.error500();
//     }
//   }

//   @Post()
//   async post(@Body() body) {
//     this.userService.dataValidation(body);
//     this.emailService.send(
//       body.email,
//       'Events API',
//       'Bem-vindo à Events API. Aqui sua presença será um evento ( ͡° ͜ʖ ͡°)',
//     );
//     try {
//       return await this.userService.createUser(body);
//     } catch (error) {
//       this.errorResponse.error500();
//     }
//   }

//   @Delete()
//   async delete(@Body() body) {
//     try {
//       return await this.userService.deleteUser(body);
//     } catch (error) {
//       this.errorResponse.error500();
//     }
//   }
// }
