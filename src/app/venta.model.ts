export class Venta{

  nombreVenta:String;
  vendedor:String;
  cantidad:number;
  valor:number;

  constructor(nombre:String,vendedor:String,cantidad:number,valor:number){
    this.nombreVenta = nombre;
    this.vendedor = vendedor;
    this.cantidad = cantidad;
    this.valor  = valor;

  }

}