import { Component, EventEmitter, Output} from '@angular/core';
import { Venta} from '../venta.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent{

  nombre:String;
  vendedor:String;
  cantidad:number;
  valor:number;
  @Output() ventaNueva = new EventEmitter<Venta>();
addVentas(){
  let venta = new Venta(this.nombre,this.vendedor,this.cantidad,this.valor);
  console.log(venta);
  this.ventaNueva.emit(venta);

  }
  constructor() { }



}
