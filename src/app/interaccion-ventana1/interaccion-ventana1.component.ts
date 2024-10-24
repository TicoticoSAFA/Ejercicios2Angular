import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana1',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana1.component.html',
  styleUrl: './interaccion-ventana1.component.css'
})
export class InteraccionVentana1Component {
  nuevaVentana: Window | null = null;
  resolucion = {
    ancho: 400,
    alto: 400
  };

  abrirVentana() {

    if (this.nuevaVentana) {
      this.nuevaVentana.close();
    }
    this.nuevaVentana = window.open('', 'Ventana1', `width=${this.resolucion.ancho},height=${this.resolucion.alto}`);
  }

  redimensionarVentana() {
    if (this.nuevaVentana) {
      let ancho = prompt('Ancho de la ventana', '400');
      let alto = prompt('Alto de la ventana', '400');
      this.nuevaVentana.resizeTo(Number(ancho), Number(alto));
      this.actualizarResolucion();
    }
  }

  actualizarResolucion() {
    if (this.nuevaVentana) {
      this.resolucion.ancho = this.nuevaVentana.outerWidth;
      this.resolucion.alto = this.nuevaVentana.outerHeight;
    }
  }
}
