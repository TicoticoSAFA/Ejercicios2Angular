import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacion-historial',
  standalone: true,
  imports: [],
  templateUrl: './navegacion-historial.component.html',
  styleUrl: './navegacion-historial.component.css'
})
export class NavegacionHistorialComponent {
  irAtras() {
    window.history.back();
  }

  irAdelante() {
    window.history.forward();
  }

}
