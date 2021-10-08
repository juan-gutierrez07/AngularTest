import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private url = 'https://pruebaapi1234.azurewebsites.net/api/HttpTrigger1?code=2VIMaFxshtJd/TZ1friwut3p5uZttOwA3EIuXsvmHaHzJ2HPal5jhQ==';
  constructor(private httpclient: HttpClient) {
  }

obtenerData(): Observable<any>{
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  

    return this.httpclient.get(this.url,{headers});
  }

  // ObtenerInfo(){
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //    this.httpclient.get('https://pruebaapi1234.azurewebsites.net/api/HttpTrigger1?code=2VIMaFxshtJd/TZ1friwut3p5uZttOwA3EIuXsvmHaHzJ2HPal5jhQ==',{headers}).subscribe(response =>{
  //     console.log(response);
  //   },error=>{});
  // }
}
