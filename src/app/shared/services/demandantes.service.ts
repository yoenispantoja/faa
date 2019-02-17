import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'contentType': 'false',
    'processData': 'false',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DemandantesService {

  url = environment.apiUrl + '/demandantes'; //url del servicio del API

  constructor(private myHttp: HttpClient) { }

  //Devuelve la lista de los demandantes
  getDemandantes() {
    return this.myHttp.get(this.url);
  }

  //Aficiona un demandante
  addDemandante(demandante: any) {
    return this.myHttp.post(this.url, demandante, httpOptions);
  }

  //Actualiza un demandante
  editDemandante(id: number, demandante: any) {
    return this.myHttp.put(this.url + '/' + id, demandante, httpOptions);
  }

  //Elimina un demandante
  deleteDemandante(id: number) {
    return this.myHttp.delete(this.url + '/' + id, httpOptions);
  }
}
