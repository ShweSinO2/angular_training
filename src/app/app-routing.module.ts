import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingOneComponent } from './pages/testing-one/testing-one.component';

const routes: Routes = [
  {
    path: '',
    component: TestingOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
