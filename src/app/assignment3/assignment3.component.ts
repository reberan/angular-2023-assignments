import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component {
  paragraph: string = 'Secret Password = tuna';
  displayParagraph: boolean = true;
  logs: Array<{ counter: number; message: string }> = [];
  counter: number = 1;

  toggleParagraph(): void {
    this.displayParagraph = !this.displayParagraph;
    this.logs.push({
      counter: this.counter,
      message: this.displayParagraph ? 'Displaying details' : 'Hiding details',
    });
    this.counter++;
  }
}
