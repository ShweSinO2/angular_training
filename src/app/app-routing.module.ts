import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';
import { AssignmentDay5Component } from './pages/assignment-day5/assignment-day5.component';
import { AssignmentDay6Component } from './pages/assignment-day6/assignment-day6.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';

const routes: Routes = [
  {
    path: '',
    component: TestingOneComponent
  },
  {
    path: 'day4',
    component: AssignmentDay4Component
  },
  {
    path: 'day5',
    component: AssignmentDay5Component
  },
  {
    path: 'day6',
    component: AssignmentDay6Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
