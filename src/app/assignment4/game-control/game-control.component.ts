import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  public values: number[] = [];
  public interval: any = null;
  
  constructor() {}

  onStart(): void {
    const getRandomInt: Function = (max: number) =>
      Math.floor(Math.random() * max);

    this.interval = setInterval(() => {
      this.values.push(getRandomInt(100));
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.interval);
    this.values = [];
  }
}
