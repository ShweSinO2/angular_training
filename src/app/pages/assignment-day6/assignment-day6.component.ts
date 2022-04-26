import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day6',
  templateUrl: './assignment-day6.component.html',
  styleUrls: ['./assignment-day6.component.scss']
})
export class AssignmentDay6Component implements OnInit {

  username: string = '';
  email: string = '';
  phoneNumber: number = 0;
  address: any;
  description: any;
  userData: any = [];
  userTable: any = [];
  userList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    console.log("hello");
    const personData = {
      username: this.username,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      description: this.description
    };
    //console.log(personData);
    this.userData.push(personData);
    console.log(this.userData);
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  refreshList() {
    this.userTable = localStorage.getItem('userData');
    this.userList = JSON.parse(this.userTable);
    console.log(this.userList);
  }

}
