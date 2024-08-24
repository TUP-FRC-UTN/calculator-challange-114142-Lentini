import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-game-result-component',
  standalone: true,
  imports: [],
  templateUrl: './game-result-component.component.html',
  styleUrl: './game-result-component.component.css'
})
export class GameResultComponentComponent {

  @Input() valor1: number = 0;
  @Input() valor2: number = 0;
  result : number | undefined;
  ngOnChanges(changes : SimpleChange){
    this.result = this.valor1 + this.valor2;
  }
}
