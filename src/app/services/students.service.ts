import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Users} from '../student/models/users';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http
      .get<Users[]>('/api/alumno');
  }
}
