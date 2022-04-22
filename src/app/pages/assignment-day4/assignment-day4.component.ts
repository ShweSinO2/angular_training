import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day4',
  templateUrl: './assignment-day4.component.html',
  styleUrls: ['./assignment-day4.component.scss']
})
export class AssignmentDay4Component implements OnInit {
  title = "Angular Event Binding";
  nums = 0;
  incDisabled = false;
  decDisabled = true;

  Increment(){
    this.nums += 1;
    this.decDisabled = false;
    if (this.nums == 10) {
      this.incDisabled = true;
    }
    return this.nums;
  }
  Decrement(){
    this.nums -= 1;
    this.incDisabled = false;
    if (this.nums == 0) {
      this.decDisabled = true;
    }
    return this.nums;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
