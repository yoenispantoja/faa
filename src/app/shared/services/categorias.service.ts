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
export class CategoriasService {
  url = environment.apiUrl + '/categorias'; //url del servicio del API

  constructor(private myHttp: HttpClient) {}

  //Devuelve la lista de los categorias
  getCategorias() {
    return this.myHttp.get(this.url);
  }

  //Aficiona un categoria
  addCategoria(categoria: any) {
    return this.myHttp.post(this.url, categoria, httpOptions);
  }

  //Actualiza un categoria
  editCategoria(id: number, categoria: any) {
    return this.myHttp.put(this.url + '/' + id, categoria, httpOptions);
  }

  //Elimina un categoria
  deleteCategoria(id: number) {
    return this.myHttp.delete(this.url + '/' + id, httpOptions);
  }
}
