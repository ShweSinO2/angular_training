import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AppRoutingModule } from './app-routing.module';

//pages
import { AppComponent } from './app.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';
import { AssignmentDay5Component } from './pages/assignment-day5/assignment-day5.component';
import { AssignmentDay6Component } from './pages/assignment-day6/assignment-day6.component';
import { AssignmentDay7Component } from './pages/assignment-day7/assignment-day7.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AssignmentDay10Component } from './pages/assignment-day10/assignment-day10.component';
import { AssignmentDay10TableComponent } from './pages/assignment-day10-table/assignment-day10-table.component';
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
import { PostControlComponent } from './pages/post-control/post-control.component';
import { AssignmentDay25Component } from './pages/assignment-day25/assignment-day25.component';
import { AssignmentDay26Component } from './pages/assignment-day26/assignment-day26.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AssignmentDay27Component } from './pages/assignment-day27/assignment-day27.component';

//pipes
import { ChangeToKGPipe } from './pipes/change-to-kg.pipe';
import { PowerExponentPipe } from './pipes/power-exponent.pipe';

@NgModule({
  declarations: [
    ChangeToKGPipe,
    PowerExponentPipe,
    AppComponent,
    TestingOneComponent,
    AssignmentDay4Component,
    AssignmentDay5Component,
    AssignmentDay6Component,
    AssignmentDay7Component,
    UserRegistrationComponent,
    UserListComponent,
    AssignmentDay10Component,
    AssignmentDay10TableComponent,
    AssignmentDay11Component,
    AssignmentDay12Component,
    AssignmentDay14Component,
    AssignmentDay15Component,
    AssignmentDay16Component,
    AssignmentDay18Component,
    AssignmentDay19Component,
    AssignmentDay20Component,
    AssignmentDay22Component,
    AssignmentDay24Component,
    AssignmentDay23Component,
    PostControlComponent,
    AssignmentDay25Component,
    NotFoundPageComponent,
    AssignmentDay26Component,
    AssignmentDay27Component,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    ChangeToKGPipe,
    PowerExponentPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
