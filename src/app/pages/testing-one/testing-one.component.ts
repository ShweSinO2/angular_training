import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-one',
  templateUrl: './testing-one.component.html',
  styleUrls: ['./testing-one.component.scss']
})
export class TestingOneComponent implements OnInit {

  public title = "User Details";
  public userlists = [
    {
      "id": 1,
      "firstName": "Devglan",
      "lastName": "Devglan",
      "userName": "devglan",
      "age": 33,
      "salary": 3456
    },
    {
      "id": 2,
      "firstName": "Tom",
      "lastName": "Asr",
      "userName": "tom234",
      "age": 23,
      "salary": 7823
    },
    {
      "id": 3,
      "firstName": "Adam",
      "lastName": "Psr",
      "userName": "adam",
      "age": 45,
      "salary": 4234
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
