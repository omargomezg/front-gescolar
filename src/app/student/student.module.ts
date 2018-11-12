import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';
import { StudentsService } from '../services/students.service';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [ViewAllStudentsComponent],
  providers: [
    StudentsService
  ]
})
export class StudentModule { }
