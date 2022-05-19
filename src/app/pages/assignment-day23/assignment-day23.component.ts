import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//services
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assignment-day23',
  templateUrl: './assignment-day23.component.html',
  styleUrls: ['./assignment-day23.component.scss']
})
export class AssignmentDay23Component implements OnInit {

  public loginForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    localStorage.setItem('email', 'sso@gmail.com');
    localStorage.setItem('password', '1234');
  }

  public myError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
      this.userService.login(this.loginForm.value);
  }
}
