import { Component, OnInit } from '@angular/core';

import { Users } from '../models/users';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'hnge-view-all-students',
  template: `
    <table>
      <thead>
        <tr>
          <th>Rut</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>
            {{user.rut}}
          </td>
          <td>
            {{user.nombres}} {{user.apellidoPaterno}} {{user.apellidoMaterno}}
          </td>
        </tr>
      <tbody>
    </table>
  `,
  styles: []
})

export class ViewAllStudentsComponent implements OnInit {
  users: Users[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.loadAllStudents();
  }

  private loadAllStudents() {
    this.studentsService.getAll().subscribe(users => {
      this.users = users;
    });
  }

}
