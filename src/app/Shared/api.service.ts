import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  // Post Method For Add Student
  postEmployee(data: any) {
    return this._http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Get Method For All Student
  getEmployee() {
    return this._http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Put Method For Update Student
  putEmployee(data: any, id: number) {
    return this._http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // Delete Method For Update Student
  deleteEmployee(id: number) {
    return this._http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
