import { Component,Input } from "@angular/core";
import { Persona } from "../persona.model";

@Component({
  selector:'app-personas',
  templateUrl:'./personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent{

  @Input()persona: Persona;
  @Input()indice : number;
}
