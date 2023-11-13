import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { EconomicsIntegrationImpl } from 'src/infra/http/economics.integration';

@Injectable()
export class EconomicsService {
  constructor(private provider: EconomicsIntegrationImpl) {}

  getIpca(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.provider.getIpca(initialDate, finalDate);
  }

  getPib(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.provider.getPib(initialDate, finalDate);
  }

  getIbovespa(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.provider.getIbovespa(initialDate, finalDate);
  }

  getCdi(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.provider.getCdi(initialDate, finalDate);
  }

  getPtax(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.provider.getPtax(initialDate, finalDate);
  }
}
