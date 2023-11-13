import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EconomicsIntegrationImpl {
  constructor(private httpService: HttpService) {}

  getIpca(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        `https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados?formato=json&dataInicial=${initialDate}&dataFinal=${finalDate}`,
      )
      .pipe(map((response: AxiosResponse) => response.data));
  }

  getPib(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        `https://api.bcb.gov.br/dados/serie/bcdata.sgs.14640/dados?formato=json&dataInicial=${initialDate}&dataFinal=${finalDate}`,
      )
      .pipe(map((response: AxiosResponse) => response.data));
  }

  getIbovespa(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        `https://api.bcb.gov.br/dados/serie/bcdata.sgs.7832/dados?formato=json&dataInicial=${initialDate}&dataFinal=${finalDate}`,
      )
      .pipe(map((response: AxiosResponse) => response.data));
  }

  getCdi(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        `https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados?formato=json&dataInicial=${initialDate}&dataFinal=${finalDate}`,
      )
      .pipe(map((response) => response));
  }

  getPtax(
    initialDate: string,
    finalDate: string,
  ): Observable<AxiosResponse<any>> {
    const convertedInitialDate = this.convertDateWithSlash(initialDate);
    const convertedFinalDate = this.convertDateWithSlash(finalDate);
    return this.httpService
      .get(
        `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial='${convertedInitialDate}',dataFinalCotacao='${convertedFinalDate}')?$format=json`,
      )
      .pipe(map((response: AxiosResponse) => response.data.value));
  }

  private convertDateWithSlash(dateStr: string): string {
    const [day, month, year] = dateStr.split('/');
    return `${month}-${day}-${year}`;
  }
}
