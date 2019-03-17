import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = environment.apiUrl + '/login'; //url del servicio del API

  constructor(private myHttp: HttpClient) {}

  //Devuelve la lista de los categorias
  login(username:string, password:string) {
    let user={
      'username':username,
      'password': password
    }
    return this.myHttp.post(this.urlLogin, user, { responseType: 'json' });
  }
}
