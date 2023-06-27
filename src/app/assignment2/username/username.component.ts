import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent {
  username: string = '';

  resetUsername(): void {
    this.username = '';
  }
  shouldEnableResetButton(): boolean {
    return this.username !== '' && this.username.length > 0;
  }
}
