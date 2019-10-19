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
export class UsuariosService {
  url = environment.apiUrl + '/usuarios'; //url del servicio del API

  constructor(private myHttp: HttpClient) {}

  //Devuelve la lista de los usuarios
  getUsuarios() {
    return this.myHttp.get(this.url);
  }

  //Aficiona un demandante
  addUsuario(usuario: any) {
    return this.myHttp.post(this.url, usuario, httpOptions);
  }

  //Actualiza un usuario
  editUsuario(id: number, usuario: any) {
    return this.myHttp.put(this.url + '/' + id, usuario, httpOptions);
  }

  //Elimina un usuario
  deleteUsuario(id: number) {
    return this.myHttp.delete(this.url + '/' + id, httpOptions);
  }
}
