export class Persona {

  nombre: String = "";
  apellido: String = "";

  constructor(nombre: String, apellido: String){

    this.nombre = nombre;
    this.apellido = apellido;
  }

  /* Segunda forma

    constructor(public nombre: String, public apellido: String){}
  */
}
