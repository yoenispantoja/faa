import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
    contentType: 'false',
    processData: 'false'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  url = environment.apiUrl + '/getdatachart'; //url del servicio del API

  constructor(private myHttp: HttpClient) {}

  //Devuelve la lista de los categorias
  getDataChart() {
    return this.myHttp.get(this.url, { responseType: 'json' });
  }
}
