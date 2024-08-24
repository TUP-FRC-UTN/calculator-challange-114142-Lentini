import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputComponentComponent } from './number-input-component/number-input-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NumberInputComponentComponent, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  @Output() resultado = new EventEmitter<number>() 
  valor1p : number|undefined;
  valor2p : number |undefined;
  sumar(valor1p : number, valor2p: number){
    this.resultado.emit(this.valor1p)
  }
}
