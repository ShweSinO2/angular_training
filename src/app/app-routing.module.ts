import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { AssignmentDay10TableComponent } from './pages/assignment-day10-table/assignment-day10-table.component';
import { AssignmentDay10Component } from './pages/assignment-day10/assignment-day10.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './pages/assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './pages/assignment-day16/assignment-day16.component';
import { AssignmentDay18Component } from './pages/assignment-day18/assignment-day18.component';
import { AssignmentDay19Component } from './pages/assignment-day19/assignment-day19.component';
import { AssignmentDay20Component } from './pages/assignment-day20/assignment-day20.component';
import { AssignmentDay22Component } from './pages/assignment-day22/assignment-day22.component';
import { AssignmentDay23Component } from './pages/assignment-day23/assignment-day23.component';
import { AssignmentDay24Component } from './pages/assignment-day24/assignment-day24.component';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';
import { AssignmentDay5Component } from './pages/assignment-day5/assignment-day5.component';
import { AssignmentDay6Component } from './pages/assignment-day6/assignment-day6.component';
import { AssignmentDay7Component } from './pages/assignment-day7/assignment-day7.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { PostControlComponent } from './pages/post-control/post-control.component';

//guards
import { UserGuard } from './guards/user.guard';

//resolver
import { PostResolver } from './resolver/post.resolver';

const routes: Routes = [
  {
    path: '', redirectTo: 'day24', pathMatch: 'full'
  },
  {
    path: 'testing',
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
    component: AssignmentDay11Component,
  },
  {
    path: 'day12',
    component: AssignmentDay12Component,
    canActivate: [UserGuard]
  },
  {
    path: 'day14',
    component: AssignmentDay14Component,
    canActivate: [UserGuard]
  },
  {
    path: 'day15',
    component: AssignmentDay15Component
  },
  {
    path: 'day16',
    component: AssignmentDay16Component
  },
  {
    path: 'day18',
    component: AssignmentDay18Component
  },
  {
    path: 'day19',
    component: AssignmentDay19Component
  },
  {
    path: 'day20',
    component: AssignmentDay20Component,
    canActivate: [UserGuard]
  },
  {
    path: 'day22/:id',
    component: AssignmentDay22Component
  },
  {
    path: 'login',
    component: AssignmentDay23Component
  },
  {
    path: 'day24',
    component: AssignmentDay24Component
  },
  {
    path: 'post',
    component: PostControlComponent,
  },
  {
    path: 'post/:id',
    component: PostControlComponent,
    resolve: { user: PostResolver }
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
