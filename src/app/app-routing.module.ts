import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';
import { AssignmentDay5Component } from './pages/assignment-day5/assignment-day5.component';
import { AssignmentDay6Component } from './pages/assignment-day6/assignment-day6.component';
import { AssignmentDay7Component } from './pages/assignment-day7/assignment-day7.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

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
  },
  {
    path: 'day7',
    component: AssignmentDay7Component
  },
  {
    path: 'registration',
    component: UserRegistrationComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
