import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   _apiUrl = `${environment.hostUrl}/api/v1/project`;
   _token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ29kZSI6Ik5vb3RpM3ciLCJ1c2VyTmFtZSI6IkNob25uaXNhIiwidXNlckxhc3ROYW1lIjoiVGhpZW1idW5kaXQiLCJ1c2VyRW1haWwiOiJ0aWV3d2FfaGFoYUBob3RtYWlsLmNvbSJ9.Gnb5Wx3jDi-6IVtGpfG64atQMaX6brBjRozitU0nlcQ Content-Type : application/json';
    constructor(private _http: HttpClient) { }

  getProject(): Observable<any> {
    return this._http.get(this._apiUrl);
  }

  addProject(body): Observable<any> {
    return this._http.post(this._apiUrl, body, { headers : {
      'Content-Type': 'application/json',
      'Authorization': this._token
    }});
  }

  updateProject(body): Observable<any> {
    return this._http.put(this._apiUrl, body, { headers : {
      'Content-Type': 'application/json',
      'Authorization': this._token
    }});
  }

  deleteProject(key): Observable<any> {
    return this._http.delete(`${this._apiUrl}/${key}`);
  }
}
