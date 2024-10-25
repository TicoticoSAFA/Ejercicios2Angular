import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana2.component.html',
  styleUrl: './interaccion-ventana2.component.css'
})
export class InteraccionVentana2Component {
  nuevaVentana: Window | null = null;
  posicion = {
    izquierda: 100,
    arriba: 100
  };

  abrirVentana() {
    if (this.nuevaVentana) {
      this.nuevaVentana.close();
    }
    this.nuevaVentana = window.open('', 'VentanaMovible', 'width=400,height=400');
    this.moverVentana(0, 0);
  }

  moverVentana(x: number, y: number) {
    if (this.nuevaVentana) {
      this.posicion.izquierda += x;
      this.posicion.arriba += y;
      this.nuevaVentana.moveTo(this.posicion.izquierda, this.posicion.arriba);
      this.nuevaVentana.focus();
    }
  }

  moverArriba() {
    this.moverVentana(0, -100);
  }

  moverAbajo() {
    this.moverVentana(0, 100);
  }

  moverIzquierda() {
    this.moverVentana(-100, 0);
  }

  moverDerecha() {
    this.moverVentana(100, 0);
  }

}
