import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-assignment-day15',
  templateUrl: './assignment-day15.component.html',
  styleUrls: ['./assignment-day15.component.scss']
})
export class AssignmentDay15Component implements OnInit {

  USER_DATA: User[] = [
    { id: 1, name: 'Kyaw Kyaw', email: 'kyawkyaw@gmail.com', age: 24, hobby: this.changeArrayToString(['swimming', 'reading']) },
    { id: 2, name: 'Aye Aye', email: 'ayeaye@gmail.com', hobby: this.changeArrayToString(['cooking', 'eating']) },
    { id: 3, name: 'Tun Tun', email: 'tuntun@gmail.com', age: 20, phoneNumber: '+959754214896', hobby: this.changeArrayToString(['singing', 'dancing']) }
  ];
  displayedColumns = ['id', 'name', 'email', 'age', 'phoneNumber', 'hobby'];
  dataSource: any = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.USER_DATA;
  }

  changeArrayToString(paramArr: string[]): string {
    return paramArr.map(eachHobby => eachHobby).join(',');
  }
}
