import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Demandante } from '../models/demandantes';

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

  url = environment.apiUrl + '/demandantes'; // url del servicio del API

  constructor(private myHttp: HttpClient) { }

  // Devuelve la lista de los demandantes
  getDemandantes(): Observable<Demandante[]> {
    return this.myHttp.get<Demandante[]>(this.url);
  }

  // Aficiona un demandante
  addDemandante(demandante: any) {
    return this.myHttp.post(this.url, demandante, httpOptions);
  }

  // Actualiza un demandante
  editDemandante(id: number, demandante: any) {
    return this.myHttp.put(this.url + '/' + id, demandante, httpOptions);
  }

  // Elimina un demandante
  deleteDemandante(id: number):Observable<Demandante> {
    return this.myHttp.delete<Demandante>(this.url + '/' + id, httpOptions);
  }
}
