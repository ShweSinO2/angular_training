import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';

const routes: Routes = [
  {
    path: '',
    component: TestingOneComponent
  },
  {
    path: 'day4',
    component: AssignmentDay4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
