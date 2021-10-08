import { Component, OnInit } from '@angular/core';
import {PruebaService} from  '../services/prueba.service';
import { Datos } from '../datos.interface';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  title = 'Servicio Rest';
  data:any [] = [];
  constructor(private pruebaService: PruebaService) { }
    obtenerInfo(){
      this.pruebaService.obtenerData().subscribe( result =>{
        console.log(result);
        for( let dato of result){
          console.log(dato.name);
        }
        this.data.push(result);

      }, error =>{
        console.log(error);
      });
      // this.pruebaService.ObtenerInfo();
    }
  ngOnInit(): void {
  }

}
