import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames: string[] = ['Test', 'test'];
  forbiddenProjectEmails: string[] = [
    'test@test.com',
    'Test@test.com',
    'Test@Test.com',
    'test@Test.com',
  ];

  constructor() {}
  onSubmit(): void {
    console.log(this.projectForm);
  }
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      projectEmail: new FormControl(
        null,
        [Validators.required, Validators.email],
        [this.forbiddenEmails.bind(this)]
      ),
      projectStatus: new FormControl(null, Validators.required),
    });
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectEmails.indexOf(control.value) !== -1) {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
