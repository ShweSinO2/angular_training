import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-day22',
  templateUrl: './assignment-day22.component.html',
  styleUrls: ['./assignment-day22.component.scss']
})
export class AssignmentDay22Component implements OnInit {

  id: number;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
