import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day10-table',
  templateUrl: './assignment-day10-table.component.html',
  styleUrls: ['./assignment-day10-table.component.scss']
})
export class AssignmentDay10TableComponent implements OnInit {

  public userTable: any = [];
  public userList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.userTable = localStorage.getItem('userInfo');
    this.userList = JSON.parse(this.userTable);
  }

}
