import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaNueva = new EventEmitter<Persona>();
  nombre: String ="";
  apellido: String = "";

  addPerson(){
    let persona = new Persona(this.nombre, this.apellido);
    this.personaNueva.emit(persona);

  }
  constructor() { }

  ngOnInit() {
  }

}
