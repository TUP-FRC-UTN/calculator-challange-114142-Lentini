import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputComponentComponent } from './number-input-component/number-input-component.component';
import { GameResultComponentComponent } from './game-result-component/game-result-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NumberInputComponentComponent,GameResultComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  valor1 : number | undefined;
  valor2 : number | undefined;
  resultado: number | undefined;
  sumar(){
   
  }
}
