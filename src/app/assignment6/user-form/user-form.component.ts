import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @ViewChild('f') userForm: NgForm;

  defaultSubscription: string = 'advanced';
  formSubmitted: boolean = false;

  femail: string = '';
  fsubscription: string = '';
  fpassword: string = '';

  onSubmit(): void {
    this.formSubmitted = true;
    console.log(this.userForm.value.userData);

    this.femail = this.userForm.value.userData.email;
    this.fsubscription = this.userForm.value.userData.subscription;
    this.fpassword = this.userForm.value.userData.password;

    console.log(this.femail);
    console.log(this.fsubscription);
    console.log(this.fpassword);

    this.userForm.reset();
  }
}
