import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerBlue;
      }
      ,
      p {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  name = 'reberan';
}
