import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './number-input-component.component.html',
  styleUrl: './number-input-component.component.css'
})
export class NumberInputComponentComponent {

  valor1 : number | undefined
  valor2: number | undefined
  resultado : number = 0
  sumar(valor1p : number, valor2p : number){
      this.resultado = valor1p + valor2p

  }
}
