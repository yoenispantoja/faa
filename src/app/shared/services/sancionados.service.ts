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
export class SancionadosService {

  url = environment.apiUrl + '/sancionados'; //url del servicio del API

  constructor(private myHttp: HttpClient) { }
  
  //Devuelve la lista de los sancionados
  getSancionados(){
   return this.myHttp.get(this.url);    
  }

  //Devuelve un sancionado especifico
  getSancionadoById(id:string) {
    return this.myHttp.get(this.url+'/'+id);
  }
  
  //Aficiona un sancionado
  addSancionado(sancionado:any){    
    return this.myHttp.post(this.url, sancionado, httpOptions);      
  }

  //Actualiza un sancionado
  editSancionado(id:number,sancionado:any){    
    return this.myHttp.put(this.url + '/' + id, sancionado, httpOptions);      
  }

  //Elimina un sancionado
  deleteSancionado(id:number)
  {
    return this.myHttp.delete(this.url+'/'+id, httpOptions);
  }

  

  
}
