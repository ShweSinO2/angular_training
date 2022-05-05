import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-day12',
  templateUrl: './assignment-day12.component.html',
  styleUrls: ['./assignment-day12.component.scss']
})
export class AssignmentDay12Component implements OnInit {

  public form: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cfmPassword: ['', [Validators.required]],
    },
    {
      validators: this.MustMatch('password', 'cfmPassword')
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  // custom validator to check that two fields match
  MustMatch(controlName: string, matchingControlName: string) {
    return (fg: FormGroup) => {
      const control = fg.controls[controlName];
      const matchingControl = fg.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  saveData(data: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data));
  }
}
