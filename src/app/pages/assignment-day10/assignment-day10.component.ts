import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-day10',
  templateUrl: './assignment-day10.component.html',
  styleUrls: ['./assignment-day10.component.scss']
})
export class AssignmentDay10Component implements OnInit {

  public form: any;
  public userInfo: any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      email: [null],
      phoneNumber: [null],
      address: [null],
      description: [null],
      country: [null],
      gender: [null],
      dob: [null],
    });
   
  }

  saveDetails(form: any) {
    this.userInfo.push(this.form.value);
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
  }
}
