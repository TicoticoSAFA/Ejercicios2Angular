import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaHoraComponent} from './fecha-hora/fecha-hora.component';
import {NumeroAleatorioComponent} from './numero-aleatorio/numero-aleatorio.component';
import {NavegacionHistorialComponent} from './navegacion-historial/navegacion-historial.component';
import {InteraccionVentana1Component} from './interaccion-ventana1/interaccion-ventana1.component';
import {InteraccionVentana2Component} from './interaccion-ventana2/interaccion-ventana2.component';
import {ManipulacionCookiesComponent} from './manipulacion-cookies/manipulacion-cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FechaHoraComponent,
    NumeroAleatorioComponent,
    NavegacionHistorialComponent,
    InteraccionVentana1Component,
    InteraccionVentana2Component,
    ManipulacionCookiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejerciciosAngular2';
}
