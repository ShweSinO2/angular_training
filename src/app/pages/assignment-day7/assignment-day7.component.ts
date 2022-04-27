import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day7',
  templateUrl: './assignment-day7.component.html',
  styleUrls: ['./assignment-day7.component.scss']
})
export class AssignmentDay7Component implements OnInit {

  people: any[] = [
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
