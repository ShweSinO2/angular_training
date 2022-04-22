import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';
import { AssignmentDay4Component } from './pages/assignment-day4/assignment-day4.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingOneComponent,
    AssignmentDay4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
