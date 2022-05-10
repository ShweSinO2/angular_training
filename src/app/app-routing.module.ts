import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { AssignmentDay10TableComponent } from './pages/assignment-day10-table/assignment-day10-table.component';
import { AssignmentDay10Component } from './pages/assignment-day10/assignment-day10.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './pages/assignment-day15/assignment-day15.component';
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
  },
  {
    path: 'day10',
    component: AssignmentDay10Component
  },
  {
    path: 'day10-table',
    component: AssignmentDay10TableComponent
  },
  {
    path: 'member/register',
    component: AssignmentDay11Component
  },
 {
    path: 'day12',
    component: AssignmentDay12Component
  },
  {
    path: 'day14',
    component: AssignmentDay14Component
  },
  {
    path: 'day15',
    component: AssignmentDay15Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
