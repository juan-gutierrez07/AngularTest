import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  title = "Probando directiva for"
  personas: Persona [] = [new Persona('Juan','Gutierrez'), new Persona('Elizabet','Angel')];

  personaAgregada( persona:Persona){
    this.personas.push(persona);
  }

  ngOnInit(): void {
  }

}
