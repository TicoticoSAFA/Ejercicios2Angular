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
    ancho: 200,
    alto: 200
  };

  resolucionVentana: string = '';

  abrirVentana() {
    if (this.nuevaVentana) {
      this.nuevaVentana.close();
    }
    this.nuevaVentana = window.open('', 'Ventana1', `width=${this.resolucion.ancho},height=${this.resolucion.alto}`);
    this.actualizarResolucion(this.resolucion);
  }

  redimensionarVentana() {
    if (this.nuevaVentana) {
      let ancho = prompt('Ancho de la ventana', '400');
      let alto = prompt('Alto de la ventana', '400');
      this.actualizarResolucion({ ancho: Number(ancho), alto: Number(alto) });
    }
  }

  actualizarResolucion(resolucion?: { ancho: number, alto: number }) {
    if (resolucion) {
      this.resolucion = resolucion;
    }
    this.resolucionVentana = `Ancho: ${this.resolucion.ancho}px, Alto: ${this.resolucion.alto}px`;
  }
}
