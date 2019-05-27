import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = environment.apiUrl + '/login_user'; //url del servicio del API
  urlLoginLDAP = environment.apiUrl + '/auth'; //url del servicio del API

  constructor(private myHttp: HttpClient) {}

  //Autentica
  login(username: string, password: string) {
    let user = {
      username: username,
      password: password
    };
    return this.myHttp.post(this.urlLogin, user);
  }

  //Autentica por ldap
  auth(username: string, password: string) {
    let user = {
      username: username,
      password: password
    };
    return this.myHttp.post(this.urlLoginLDAP, user);
  }
}
