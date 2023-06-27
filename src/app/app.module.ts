import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment1/success-alert/success-alert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { UsernameComponent } from './assignment2/username/username.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { UserFormComponent } from './assignment6/user-form/user-form.component';
import { Assignment7Component } from './assignment7/assignment7.component';
import { ProjectFormComponent } from './assignment7/project-form/project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment2Component,
    UsernameComponent,
    Assignment3Component,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    Assignment6Component,
    UserFormComponent,
    Assignment7Component,
    ProjectFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
