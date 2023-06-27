import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css'],
  providers: [CounterService, UserService],
})
export class Assignment5Component {}
