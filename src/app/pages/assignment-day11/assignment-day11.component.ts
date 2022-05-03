import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-assignment-day11',
  templateUrl: './assignment-day11.component.html',
  styleUrls: ['./assignment-day11.component.scss']
})
export class AssignmentDay11Component implements OnInit {

  date = new FormControl(new Date()); 
  formData: any = { 
    name: '', 
    email: '', 
    mbdate: this.date.value
  }; 
  userData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveData() {
    this.userData.push(this.formData);
    this.formData = {
      name: '',
      email: '',
      mbdate: this.date.value
    };
  }

  removeData(id: any) {
    this.userData.splice(id,1);
  }

}
