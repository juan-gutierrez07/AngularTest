import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoCalculadoraComponent } from './resultado-calculadora/resultado-calculadora.component';
import { VentasComponent } from './ventas/ventas.component';
import { CantidadventasComponent } from './cantidadventas/cantidadventas.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    CalculadoraComponent,
    CiclosComponent,
    FormularioComponent,
    ResultadoCalculadoraComponent,
    VentasComponent,
    CantidadventasComponent,
    TablaComponent
   ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
