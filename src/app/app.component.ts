import { Component } from '@angular/core';
import { Venta } from './venta.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saludos desde app component ';
  desa = false;
  mensaje = 'No se agregado !';
  titulo = '';
  ventas : Venta [] = [];
  addVenta(venta:Venta){
    console.log("llego");
    this.ventas.push(venta);
    console.log(this.ventas.length);
    console.log(venta);

  }
  changePerson(){
    this.mensaje = 'Cambio, persona agregada!'
  }

  generarTitle(event:Event){
    console.log((<HTMLInputElement>event.target).value)
    this.titulo = (<HTMLInputElement>event.target).value // comvertir a un atributo html que se pueda leer

  }
}
