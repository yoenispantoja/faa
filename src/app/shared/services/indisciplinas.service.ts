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
  urlUltimasDiez = environment.apiUrl + '/ultimas_indisciplinas'; //url del servicio del API
  urlConMedida = environment.apiUrl + '/medidas'; //url del servicio del API

  constructor(private myHttp: HttpClient) {}

  //Devuelve la lista de las indisciplinas
  getIndisciplinas() {
    return this.myHttp.get(this.url);
  }

  //Devuelve una indisciplina especifica
  getIndisciplinaById(id: string) {
    return this.myHttp.get(this.url + '/' + id);
  }

  //Devuelve la lista de las últimas 10 indisciplinas
  getUltimasIndisciplinas() {
    return this.myHttp.get(this.urlUltimasDiez);
  }

  //Devuelve la lista de las últimas 10 indisciplinas
  getIndisciplinasConMedida() {
    return this.myHttp.get(this.urlConMedida);
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
