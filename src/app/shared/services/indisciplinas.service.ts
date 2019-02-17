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
export class IndisciplinasService {

  url = environment.apiUrl + '/indisciplinas'; //url del servicio del API

  constructor(private myHttp: HttpClient) { }

  //Devuelve la lista de los indisciplinas
  getIndisciplinas() {
    return this.myHttp.get(this.url);
  }

  //Aficiona un indisciplina
  addIndisciplina(indisciplina: any) {
    return this.myHttp.post(this.url, indisciplina, httpOptions);
  }

  //Actualiza un indisciplina
  editIndisciplina(id: number, indisciplina: any) {
    return this.myHttp.put(this.url + '/' + id, indisciplina, httpOptions);
  }

  //Elimina un indisciplina
  deleteIndisciplina(id: number) {
    return this.myHttp.delete(this.url + '/' + id, httpOptions);
  }
}
