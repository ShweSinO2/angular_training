import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() todoTask: any;
  @Output() taskDeleteID: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ontaskDelete(id: number) {
    this.taskDeleteID.emit(id);
  }
}
