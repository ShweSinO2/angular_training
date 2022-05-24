import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-day26',
  templateUrl: './assignment-day26.component.html',
  styleUrls: ['./assignment-day26.component.scss']
})
export class AssignmentDay26Component implements OnInit {

  todoList: any = [];
  todoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      task: ['',Validators.required]
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.todoForm.controls[controlName].hasError(errorName);
  }

  saveTask() {
    this.todoList.push(this.todoForm.value);
    this.todoForm.reset();
  }

  deleteTask(id: number) {
    this.todoList.splice(id, 1);
  }
}
