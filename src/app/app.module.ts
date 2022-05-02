import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';
import { AssignmentDay5Component } from './pages/assignment-day5/assignment-day5.component';
import { AssignmentDay6Component } from './pages/assignment-day6/assignment-day6.component';
import { AssignmentDay7Component } from './pages/assignment-day7/assignment-day7.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AssignmentDay10Component } from './pages/assignment-day10/assignment-day10.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AssignmentDay10TableComponent } from './pages/assignment-day10-table/assignment-day10-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TestingOneComponent,
    AssignmentDay4Component,
    AssignmentDay5Component,
    AssignmentDay6Component,
    AssignmentDay7Component,
    UserRegistrationComponent,
    UserListComponent,
    AssignmentDay10Component,
    AssignmentDay10TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
