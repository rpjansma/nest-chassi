import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ErrorResponseService {
  error500() {
    throw new HttpException(
      'We had a failure while trying to make your requisition happen. Sorry, try again!',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
