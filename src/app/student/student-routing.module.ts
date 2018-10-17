import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';

const routes: Routes = [
  { path: '', component: ViewAllStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
