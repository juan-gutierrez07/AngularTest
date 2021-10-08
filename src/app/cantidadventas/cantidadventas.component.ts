import { Component,Input } from '@angular/core';
import { Venta } from '../venta.model';

@Component({
  selector: 'app-cantidadventas',
  templateUrl: './cantidadventas.component.html',
  styleUrls: ['./cantidadventas.component.css']
})
export class CantidadventasComponent {

  @Input() venta:Venta;
  @Input() index:number;


  constructor() { }



}
