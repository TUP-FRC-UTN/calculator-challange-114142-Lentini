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

  @Output() valor1 = new EventEmitter<number>() 
  valor1p : number|undefined;
  @Output() valor2 = new EventEmitter<number>()
  valor2p : number |undefined;
  sumar(){
      this.valor1.emit(this.valor1p)
      this.valor1p = undefined;
      this.valor2.emit(this.valor2p)
      this.valor2p = undefined;
  }
}
