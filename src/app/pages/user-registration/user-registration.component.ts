import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  username: string = '';
  email: string = '';
  phoneNumber: number = 0;
  address: any;
  description: any;
  userData: any = [];
  
  createUser() {
    console.log("hello");
    const personData = {
      username: this.username,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      description: this.description
    };
    this.userData.push(personData);
    console.log(this.userData);
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
