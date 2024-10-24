import { Component } from '@angular/core';

@Component({
  selector: 'app-numero-aleatorio',
  standalone: true,
  imports: [],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {

  numeroAleatorio: number = 0;

  generarNumeroAleatorio() {
    this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }

}
