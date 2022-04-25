import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-day5',
  templateUrl: './assignment-day5.component.html',
  styleUrls: ['./assignment-day5.component.scss']
})
export class AssignmentDay5Component implements OnInit {

  colspanVal = 3;
  isTrue = true;
  userStyle = "font-size: 25px; background-color: green;";
  userDetails = [
    {
      name: 'Jack Ryan',
      age: 45
    },
    {
      name: 'Lisa Ray',
      age: 23
    },
    {
      name: 'Marcus R',
      age: 19
    },
    {
      name: 'Abhinav M',
      age: 30
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
